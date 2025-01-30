import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    RouterModule
  ],
templateUrl:'./landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LandingComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  selectedRegion: 'latam' | 'spain' = 'latam';

  ngOnInit(): void {
    this.title.setTitle('QwikCard');
    this.meta.updateTag({name: 'description',content: 'Landing Page QwikCard',});
    this.meta.updateTag({name: 'og:description',content: 'Landing Page QwikCard',});
    this.meta.updateTag({ name: 'og:title', content: 'QwikCard' });
    this.meta.updateTag({ name: 'keywords', content: 'Tarjetas virtuales, tarjetas de presentación' });
    this.meta.updateTag({ name: 'og:image', content: 'https://qwikcard.netlify.app/assets/qwik.png' });

  }
 }
