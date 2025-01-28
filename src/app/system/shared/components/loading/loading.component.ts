import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  @if (isLoading()) {
    <div class="overlay" >
<div class="lds-ripple"><div></div><div></div></div>
</div>
  }
  
  `,
  styleUrl: './loading.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent { 
  private spinner = inject(LoadingService);
  isLoading = this.spinner.isLoading;

}
