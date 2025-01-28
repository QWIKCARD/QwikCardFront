import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './system/shared/components/loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QwikCardFront';


  
}
