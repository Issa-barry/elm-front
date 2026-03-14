describe('Produits - E2E complete', () => {
  const fullPermissions = ['produits.read', 'produits.create', 'produits.update', 'produits.delete'];

  const produitsFixture = [
    {
      id: 1,
      code: 'PRD-001',
      nom: 'Farine Ble',
      type: 'materiel',
      statut: 'actif',
      qte_stock: 35,
      prix_achat: 1500,
      prix_vente: 2200,
      prix_usine: 1200,
      cout: 900,
      image_url: null,
      is_global: false,
      is_critique: false,
      is_low_stock: false,
      is_out_of_stock: false,
      stock_courant: { qte_stock: 35, seuil_alerte_stock: 5 },
      created_at: '2026-01-01T10:00:00.000Z',
      updated_at: '2026-01-01T10:00:00.000Z',
    },
    {
      id: 2,
      code: 'PRD-002',
      nom: 'Savon Liquide',
      type: 'service',
      statut: 'actif',
      qte_stock: 0,
      prix_achat: 1000,
      prix_vente: 2500,
      prix_usine: null,
      cout: 700,
      image_url: null,
      is_global: false,
      is_critique: false,
      is_low_stock: false,
      is_out_of_stock: false,
      stock_courant: { qte_stock: 0, seuil_alerte_stock: 0 },
      created_at: '2026-01-02T10:00:00.000Z',
      updated_at: '2026-01-02T10:00:00.000Z',
    },
    {
      id: 3,
      code: 'PRD-003',
      nom: 'Bidon Huile',
      type: 'achat_vente',
      statut: 'inactif',
      qte_stock: 6,
      prix_achat: 5000,
      prix_vente: 6500,
      prix_usine: null,
      cout: 4500,
      image_url: null,
      is_global: false,
      is_critique: true,
      is_low_stock: true,
      is_out_of_stock: false,
      stock_courant: { qte_stock: 6, seuil_alerte_stock: 10 },
      created_at: '2026-01-03T10:00:00.000Z',
      updated_at: '2026-01-03T10:00:00.000Z',
    },
  ];

  function makeUser(permissions: string[], roles: string[] = ['admin_entreprise']) {
    return {
      id: 999,
      nom: 'Test',
      prenom: 'E2E',
      phone: '+224 600 00 00 00',
      email: 'e2e@example.com',
      pays: 'Guinee',
      code_pays: 'GN',
      code_phone_pays: '+224',
      ville: 'Conakry',
      quartier: 'Kaloum',
      reference: 'USR-E2E',
      type: 'staff',
      is_active: true,
      is_archived: false,
      archived_at: null,
      email_verified_at: null,
      last_login_at: null,
      last_login_ip: null,
      created_at: '2026-01-01T00:00:00.000Z',
      updated_at: '2026-01-01T00:00:00.000Z',
      nom_complet: 'Test E2E',
      roles,
      role_names: roles,
      permissions,
    };
  }

  function makeMePayload(user: any, permissions: string[]) {
    return {
      success: true,
      message: 'OK',
      data: {
        user,
        roles: user.roles,
        permissions,
        accessible_sites: [{ id: 1, nom: 'Usine Test', code: 'UT', type: 'production', statut: 'actif' }],
        default_site_id: 1,
        current_site_id: 1,
        is_siege_user: false,
      },
    };
  }

  function listPayload(items: any[]) {
    return {
      success: true,
      message: 'OK',
      data: items,
    };
  }

  function searchPayload(items: any[]) {
    return {
      success: true,
      message: 'OK',
      data: {
        produits: items,
        count: items.length,
      },
    };
  }

  function produitPayload(item: any) {
    return {
      success: true,
      message: 'OK',
      data: item,
    };
  }

  function seedAuthSession(win: Window, user: any): void {
    win.sessionStorage.setItem('access_token', 'e2e-token');
    win.sessionStorage.setItem('user', JSON.stringify(user));
  }

  function setupAuth(permissions: string[] = fullPermissions): any {
    const user = makeUser(permissions);

    cy.intercept('GET', '**/version.json*', {
      statusCode: 200,
      body: { version: 'e2e' },
    }).as('version');

    cy.intercept('GET', '**/auth/me', makeMePayload(user, permissions)).as('authMe');

    cy.intercept('GET', '**/notifications*', {
      statusCode: 200,
      body: {
        success: true,
        message: 'OK',
        data: {
          notifications: [],
          unread_count: 0,
        },
      },
    }).as('getNotifications');

    cy.intercept('POST', '**/notifications/*/read', {
      statusCode: 200,
      body: {
        success: true,
        message: 'OK',
        data: {
          unread_count: 0,
        },
      },
    }).as('markNotificationRead');

    cy.intercept('POST', '**/notifications/read-all', {
      statusCode: 200,
      body: {
        success: true,
        message: 'OK',
        data: {
          unread_count: 0,
        },
      },
    }).as('markAllNotificationsRead');

    return user;
  }

  function visitWithUser(path: string, user: any): void {
    cy.visit(path, {
      onBeforeLoad: (win) => {
        seedAuthSession(win, user);
      },
    });
    cy.wait('@authMe');
  }

  function setVisibleInputValue(selector: string, value: string): void {
    cy.get('body').then(($body) => {
      const allMatches = $body.find(selector);
      const visibleMatches = allMatches.filter(':visible');
      const input = (visibleMatches.get(0) ?? allMatches.get(0)) as HTMLInputElement | undefined;
      expect(input, `visible input for selector ${selector}`).to.exist;
      if (!input) return;

      input.focus();
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      input.blur();
    });
  }

  function clickVisibleButtonByText(containerSelector: string, label: string): void {
    cy.contains(`${containerSelector} button`, label)
      .should('be.visible')
      .then(($button) => {
        ($button.get(0) as HTMLButtonElement).click();
      });
  }

  function clickPrimaryDesktopFormAction(): void {
    cy.get('body').then(($body) => {
      const buttons = $body.find('.desktop-form-container button');
      const byLabel = buttons
        .filter((_, el) => /(Enregistrer|Sauvegarder)/i.test((el.textContent || '').trim()))
        .first();
      const button = (byLabel.get(0) ?? buttons.get(0)) as HTMLButtonElement | undefined;
      expect(button, 'primary desktop form action').to.exist;
      button?.click();
    });
  }

  function interceptList(items: any[] = produitsFixture): void {
    cy.intercept('GET', /\/produits(?:\?.*)?$/, listPayload(items)).as('getProduits');
  }

  function interceptById(id: number, item: any): void {
    cy.intercept('GET', new RegExp(`/produits/${id}$`), produitPayload(item)).as('getProduitById');
  }

  describe('Liste et Navigation', () => {
    it('affiche la liste desktop des produits', () => {
      const user = setupAuth();
      interceptList([produitsFixture[0], produitsFixture[1]]);

      visitWithUser('/#/produits', user);
      cy.wait('@getProduits');

      cy.get('.produits-desktop').should('be.visible');
      cy.contains('.produits-desktop tbody tr td', 'PRD-001').should('be.visible');
      cy.contains('.produits-desktop tbody tr td', 'PRD-002').should('be.visible');
    });

    it('redirige vers la creation produit via le bouton Nouveau', () => {
      const user = setupAuth();
      interceptList([produitsFixture[0], produitsFixture[1]]);

      visitWithUser('/#/produits', user);
      cy.wait('@getProduits');

      cy.contains('.produits-desktop button', 'Nouveau')
        .should('be.visible')
        .then(($button) => {
          ($button.get(0) as HTMLButtonElement).click();
        });

      cy.location('hash').should('eq', '#/produits/produits-new');
    });

    it("ouvre l'ecran edition depuis l'action de ligne", () => {
      const user = setupAuth();
      interceptList([produitsFixture[0], produitsFixture[1]]);
      interceptById(1, produitsFixture[0]);

      visitWithUser('/#/produits', user);
      cy.wait('@getProduits');

      cy.contains('.produits-desktop tbody tr', 'Farine Ble').within(() => {
        cy.get('td')
          .last()
          .find('button')
          .first()
          .then(($button) => {
            ($button.get(0) as HTMLButtonElement).click();
          });
      });

      cy.location('hash').should('eq', '#/produits/produits-edit/1');
      cy.wait('@getProduitById');
    });
  });

  describe('CRUD Produit', () => {
    it('cree un produit puis redirige vers son edition', () => {
      const user = setupAuth();

      const createdProduit = {
        ...produitsFixture[0],
        id: 99,
        nom: 'Produit E2E Create',
        prix_achat: 1800,
      };

      cy.intercept('POST', /\/produits$/, (req) => {
        expect(req.body).to.include({
          nom: 'Produit E2E Create',
          type: 'materiel',
        });
        expect(Number(req.body.prix_achat)).to.eq(1800);
        req.reply(produitPayload(createdProduit));
      }).as('createProduit');

      interceptById(99, createdProduit);

      visitWithUser('/#/produits/produits-new', user);

      cy.get('.desktop-form-container').should('be.visible');
      setVisibleInputValue('.desktop-form-container input#nom', 'Produit E2E Create');
      setVisibleInputValue('.desktop-form-container .price-field-anim input', '1800');

      clickPrimaryDesktopFormAction();

      cy.wait('@createProduit');
      cy.wait('@getProduitById');
      cy.location('hash').should('eq', '#/produits/produits-edit/99');
    });

    it('modifie un produit existant', () => {
      const user = setupAuth();
      const originalProduit = { ...produitsFixture[0] };
      const updatedProduit = { ...originalProduit, nom: 'Farine Ble Modifiee', prix_achat: 2100 };

      interceptById(1, originalProduit);

      cy.intercept('PUT', /\/produits\/1$/, (req) => {
        expect(req.body.nom).to.eq('Farine Ble Modifiee');
        expect(Number(req.body.prix_achat)).to.eq(2100);
        req.reply(produitPayload(updatedProduit));
      }).as('updateProduit');

      visitWithUser('/#/produits/produits-edit/1', user);
      cy.wait('@getProduitById');

      clickVisibleButtonByText('.desktop-form-container', 'Modifier');
      setVisibleInputValue('.desktop-form-container input#nom', 'Farine Ble Modifiee');
      setVisibleInputValue('.desktop-form-container .price-field-anim input', '2100');

      clickPrimaryDesktopFormAction();

      cy.wait('@updateProduit');
      cy.contains('.desktop-form-container button', 'Modifier').should('be.visible');
      cy.get('.desktop-form-container input#nom:visible').should('have.value', 'Farine Ble Modifiee');
    });

    it('supprime un produit depuis la liste', () => {
      const user = setupAuth();
      interceptList([produitsFixture[0], produitsFixture[1]]);

      cy.intercept('DELETE', /\/produits\/2$/, {
        statusCode: 200,
        body: { success: true, message: 'Deleted', data: null },
      }).as('deleteProduit');

      visitWithUser('/#/produits', user);
      cy.wait('@getProduits');

      cy.contains('.produits-desktop tbody tr', 'Savon Liquide').within(() => {
        cy.get('button')
          .filter(':has(.pi-trash)')
          .first()
          .then(($button) => {
            ($button.get(0) as HTMLButtonElement).click();
          });
      });

      cy.get('body').then(($body) => {
        const byText = $body
          .find('button')
          .filter((_, el) => /^(Yes|Oui)$/i.test((el.textContent || '').trim()))
          .first();

        if (byText.length > 0) {
          (byText.get(0) as HTMLButtonElement).click();
          return;
        }

        const dialogButtons = $body.find('.p-dialog-footer button:visible');
        const acceptButton = dialogButtons.last().get(0) as HTMLButtonElement | undefined;

        expect(acceptButton, 'confirm dialog accept button').to.exist;
        acceptButton?.click();
      });
      cy.wait('@deleteProduit');
      cy.contains('.produits-desktop tbody tr td', 'Savon Liquide').should('not.exist');
    });
  });

  describe('Recherche et Filtres', () => {
    it('filtre la table desktop via la recherche locale', () => {
      const user = setupAuth();
      interceptList([produitsFixture[0], produitsFixture[1]]);

      visitWithUser('/#/produits', user);
      cy.wait('@getProduits');

      setVisibleInputValue('.produits-desktop .desktop-products-search input[placeholder="Rechercher un produit..."]', 'Savon');

      cy.contains('.produits-desktop tbody tr td', 'Savon Liquide').should('be.visible');
      cy.contains('.produits-desktop tbody tr td', 'Farine Ble').should('not.exist');
    });

    it('envoie les bons query params sur les filtres statut et type', () => {
      const user = setupAuth();
      interceptList(produitsFixture);

      cy.intercept('GET', /\/produits\/search(?:\?.*)?$/, (req) => {
        const requestUrl = new URL(req.url);
        const statut = requestUrl.searchParams.get('statut');
        const type = requestUrl.searchParams.get('type');

        const filtered = produitsFixture.filter((item) => {
          const statutMatch = !statut || item.statut === statut;
          const typeMatch = !type || item.type === type;
          return statutMatch && typeMatch;
        });

        req.reply(searchPayload(filtered));
      }).as('searchProduits');

      visitWithUser('/#/produits', user);
      cy.wait('@getProduits');

      cy.get('.desktop-products-actions .desktop-filter-select').eq(0).click({ force: true });
      cy.contains('.p-select-option', 'Actif').click({ force: true });
      cy.wait('@searchProduits');

      cy.get('.desktop-products-actions .desktop-filter-select').eq(1).click({ force: true });
      cy.contains('.p-select-option', 'Service').click({ force: true });
      cy.wait('@searchProduits');

      cy.get('@searchProduits.all').then((calls: any) => {
        const lastCall = calls[calls.length - 1];
        const url = lastCall.request.url as string;

        expect(url).to.include('statut=actif');
        expect(url).to.include('type=service');
      });

      cy.contains('.produits-desktop tbody tr td', 'Savon Liquide').should('be.visible');
      cy.contains('.produits-desktop tbody tr td', 'Farine Ble').should('not.exist');
    });
  });

  describe('Permissions', () => {
    it('cache les actions create/update/delete pour un utilisateur lecture seule', () => {
      const user = setupAuth(['produits.read']);
      interceptList([produitsFixture[0], produitsFixture[1]]);

      visitWithUser('/#/produits', user);
      cy.wait('@getProduits');

      cy.contains('.produits-desktop button', 'Nouveau').should('not.exist');

      cy.contains('.produits-desktop tbody tr', 'Farine Ble').within(() => {
        cy.get('td').last().find('button').should('have.length', 0);
      });
    });
  });

  describe('Erreurs API', () => {
    it("affiche un toast d'erreur si le chargement de la liste echoue", () => {
      const user = setupAuth();

      cy.intercept('GET', /\/produits(?:\?.*)?$/, {
        statusCode: 500,
        body: {
          success: false,
          message: 'Serveur produits indisponible',
          error: true,
        },
      }).as('getProduitsFailed');

      visitWithUser('/#/produits', user);
      cy.wait('@getProduitsFailed');

      cy.contains('.p-toast-message', 'Serveur produits indisponible').should('be.visible');
    });

    it('affiche les erreurs de validation sur creation (422)', () => {
      const user = setupAuth();

      cy.intercept('POST', /\/produits$/, {
        statusCode: 422,
        body: {
          message: 'Erreur de validation',
          errors: {
            nom: ['Nom deja utilise'],
          },
        },
      }).as('createProduit422');

      visitWithUser('/#/produits/produits-new', user);

      cy.get('.desktop-form-container').should('be.visible');
      setVisibleInputValue('.desktop-form-container input#nom', 'Produit Duplique');
      setVisibleInputValue('.desktop-form-container .price-field-anim input', '1500');

      clickPrimaryDesktopFormAction();

      cy.wait('@createProduit422');
      cy.location('hash').should('eq', '#/produits/produits-new');
      cy.get('.p-toast-message').should('be.visible');
      cy.contains('.p-toast-message', 'Erreur de validation').should('be.visible');
    });
  });
});
