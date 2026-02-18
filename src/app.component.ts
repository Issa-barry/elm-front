import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeployVersionService } from '@/services/deploy-version.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(private deployVersion: DeployVersionService) {}
}
