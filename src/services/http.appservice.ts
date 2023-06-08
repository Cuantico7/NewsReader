import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest,HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';  
import { Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpAppService {
    data       :    any;
    //public     baseURI    :    string = environment.qb.urlProd; 
    public     baseURI    :    string ="";
    public key="apiKey=6e8e6e6530c0449e85044f4d3c5a5d14";
    constructor(public http : HttpClient){
        console.log('Hello WsQubit Provider');  
        
    }//END Constructor.

   /**
   * QlickBOx Solutions All Rights Reserved (C) 2022
   * Author :Jose Fernando Mendoza
   * Function : Execute get http protocol
   * Params : @parameters   : json params
   *          
   **/      
    sendRequest(action:any,parameters?: any,method?:any) {
         if (parameters == null)
            this.key="?apiKey=6e8e6e6530c0449e85044f4d3c5a5d14";
            
         this.baseURI ="http://app/api/";
         // Support easy query params for GET requests
         let params:any;
         console.log("entrea sendRequest ..");
         this.baseURI=this.baseURI+action;
         let httpHeader = {
            headers: new HttpHeaders({ 'Content-Type': 'text/plain'})
          };

          /**/
          if (parameters != null)
          {
            params="?";
            let p = new HttpParams(parameters);
            for (let k in parameters) {
            // p.set(k, parameters[k]);
              console.log(k);
              params+=k+"="+parameters[k]+"&";
            }  
            this.baseURI=this.baseURI+params+this.key;  
          }
          else
             this.baseURI=this.baseURI+this.key; 
         
             console.log(params);

        //Si el llamado al api es por GET     
        if (method == "GET")
        {
        return this.http.get(this.baseURI)
        .pipe(
          map((data) => {
            //console.log(data);
            return data;
          },
          catchError((error: any) => throwError(new Error(error.status)))
          )
        );
        }
        else //Si el llamado al api es por POST 
        {
            {
                return this.http.post(this.baseURI,httpHeader)
                .pipe(
                  map((data) => {
                            return data;
                        },
                            catchError((error: any) => throwError(new Error(error.status)))
                        )
                        );
                }
        }

 
                         
    }//Fin

    

}   