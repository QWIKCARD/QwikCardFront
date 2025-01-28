import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../../shared/services/loading.service';
import { MessageService } from '../../shared/services/messages.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,MATERIAL_MODULES,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AuthComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);
 private fb = inject(FormBuilder);
private route = inject(Router);
   loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

private loading = inject(LoadingService)
private message = inject(MessageService)
  ngOnInit(): void {
/**
 *     if (isPlatformBrowser(this.platform)) {
      //aqui entra todo lo de document o localstorage
    }
    this.title.setTitle('Login Page');
    this.meta.updateTag({
      name: 'description',
      content: 'este es mi login page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'login page' });
    this.meta.updateTag({ name: 'keywords', content: 'hola a todos a daniel' });
  }
 */
}

login(){
//this.message.showToast("warning","correcto")

  if(this.loginForm.value.username == 'demo@qwikcard.com' && this.loginForm.value.password == '123456789'){
this.loading.show();

setTimeout(() => {
  if (isPlatformBrowser(this.platform)) {
    localStorage.setItem("login","correcto");
    this.route.navigateByUrl("/admin/start");
    this.loading.hide();
   }
}, 2000);
  
    
  }
}
}