import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MATERIAL_MODULES } from 'src/app/system/shared/material/material.imports';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
templateUrl:'./start.component.html',
  styleUrl: './start.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StartComponent { }
