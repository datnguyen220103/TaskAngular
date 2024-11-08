import { Component} from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TaskAngular';
}

