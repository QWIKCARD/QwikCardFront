import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorInterceptor:HttpInterceptorFn = (req,next) =>{

    return next(req).pipe(
        catchError((error:HttpErrorResponse) => {
alert("sucedio un error mostrar libreria")
            if(error.status == 400){
                console.log("bad request");

            }
            return throwError(()=>error.error.message);
        })
    )
}