import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = '';

  const newRequest = req.clone({
    headers: req.headers.append('Authorization', 'Bearer ' + token),
  });

  return next(newRequest);
};
