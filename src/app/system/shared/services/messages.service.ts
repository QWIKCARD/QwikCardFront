/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  showToast(icon: SweetAlertIcon, message: string, time: number = 3500) {
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: time,
      timerProgressBar: false,
      customClass: {
        popup: 'custom-toast', // Clase personalizada para el toast
        title: 'custom-title', // Clase personalizada para el título
        timerProgressBar: 'custom-timer-bar', // Clase personalizada para la barra de progreso
      },
      didOpen: (toast) => {
    
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    }).fire({
      icon: icon,
      title: message,
    });
  }
}
