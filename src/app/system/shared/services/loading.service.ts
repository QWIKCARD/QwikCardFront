/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoadingService {  
isLoading =  signal<boolean>(false);

show():void{
    this.isLoading.set(true);
}
hide():void{
    this.isLoading.set(false);
}
}
