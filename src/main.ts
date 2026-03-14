import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app.component';

function showBootstrapError(err: unknown): void {
  console.error('Bootstrap Angular failed:', err);
  const root = document.querySelector('app-root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 2rem; font-family: system-ui, sans-serif; text-align: center; max-width: 28rem; margin: 2rem auto;">
        <p style="font-size: 1.1rem; color: #374151;">L'application n'a pas pu démarrer.</p>
        <p style="font-size: 0.9rem; color: #6b7280; margin-top: 0.5rem;">Rechargez la page ou essayez avec un navigateur à jour.</p>
        <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer;">Réessayer</button>
      </div>
    `;
  }
}

bootstrapApplication(AppComponent, appConfig).catch(showBootstrapError);
