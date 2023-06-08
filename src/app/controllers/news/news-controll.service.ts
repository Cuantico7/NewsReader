import { Injectable } from '@angular/core';
import { NewsModelService } from '../../models/news/news-model.service';

@Injectable({
  providedIn: 'root'
})
export class NewsControllService {

  constructor( public newsModel:NewsModelService) 
  { 

      console.log("Cree el control de Noticias");
  }

  public getAllSources():Promise<any>
  {

      return new Promise((resolve,reject)=>{
        this.newsModel.getSources(null).then(result=>{
          console.log(result.status);
          if (result.status=="ok")
            resolve(result);
          else
           reject({status:"fail",message:"No se trajo datos del modelo"});
        }).catch(error=>{
          reject({status:"fail", message:"Error conectando con el modelo"});
        })
      })

  }
}
