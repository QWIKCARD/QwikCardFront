import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>auth works!</p>`,
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthComponent implements OnInit { 
  private title  = inject(Title);
  private meta  = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    if(isPlatformBrowser(this.platform)){
//aqui entra todo lo de document o localstorage
    }
      this.title.setTitle("Login Page");
      this.meta.updateTag({
        name:"description",
        content:'este es mi login page'
      });
      this.meta.updateTag({name:'og:title',content:'login page'});
      this.meta.updateTag({name:'keywords', content:'hola a todos a daniel'})
  }
}
