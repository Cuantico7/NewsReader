import { Injectable } from '@angular/core';
import { HttpNewsService} from '../../api/http.newsservice';

@Injectable({
  providedIn: 'root'
})
export class NewsModelService {

  constructor(public newsHttp:HttpNewsService) 
  { 
      console.log("Ingrese al modelo");
  }

  getSources(params:any): Promise<any>
  {
     //let response = this.newsHttp.sendRequest("sources",params,"GET");
     
     return new Promise((resolve,reject)=>{
      let response = this.newsHttp.sendRequest("sources",params,"GET");
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
