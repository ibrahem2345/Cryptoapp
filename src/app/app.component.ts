import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterModule, NavbarComponent]
})
export class AppComponent {
  title = 'Cryptoapp';
}
