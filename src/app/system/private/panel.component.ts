import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MATERIAL_MODULES } from '../shared/material/material.imports';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MATERIAL_MODULES
  ],
templateUrl:'./panel.component.html',
  styleUrl: './panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PanelComponent {
  mobileQuery!: MediaQueryList;

  hideSidebar = signal(false);

 // private _mobileQueryListener: () => void;
  constructor(private route:Router) {

  
  
   
 
 
 //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   // this.mobileQuery.addListener(this._mobileQueryListener);
    this.listenRoute();
  }

  listenRoute(){
/**
 *     this.route.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {

      this.hideSidebar.set(event.urlAfterRedirects.includes("/panel/instance/"));
      console.log(this.hideSidebar());
      

    });
 */
  }
  itemsMenu: any[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      children: [],
      route: '/admin/start',
      isActive: false,
    },
    {
      name: 'Usuarios',
      icon: 'people',
      children: [],
      route: '/admin/users',
      isActive: false,
    },
    {
      name: 'Catalogos',
      icon: 'list_alt',
      children: [
        {
          name: 'Tarjetas',
          icon: 'credit_card',
          route: '/admin/cards',
          isActive: false,
        },

      ],
      route: null,
      isActive: false,
    },
  ];

  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));
  secondSideNav = computed(() => (this.collapsed() ? '0px' : '190px'));
  profilePicSize = computed(() => (this.collapsed() ? '90' : '180'));
   platform = inject(PLATFORM_ID);
  logout(){
    if (isPlatformBrowser(this.platform)) {
      localStorage.clear();
      this.route.navigateByUrl("/login")
    }

  }
 }
