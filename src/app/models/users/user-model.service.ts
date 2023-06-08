import { Injectable } from '@angular/core';
import { HttpAppService } from '../../api/http.appservice';
 
@Injectable({
  providedIn: 'root'
})
export class UserModelService {

  constructor( public appHttp:HttpAppService) 
  { 

  }

  autenticar(params:any): Promise<any>
  {
     //let response = this.newsHttp.sendRequest("sources",params,"GET");
     
     return new Promise((resolve,reject)=>{
      let response = this.appHttp.sendRequest("cmdAutenticar",params,"POST");
      response.subscribe(data=>{
        //console.log(data);
        resolve(data);
      },err=>{
         reject({status:"error en servicio de conexion HTTP"})
      }
      )

     })
     
  }
}
