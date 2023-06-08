import { Injectable } from '@angular/core';
import { NewsModelService } from '../../models/news/news-model.service';

@Injectable({
  providedIn: 'root'
})
export class NewsControllService {
  public dataNews:any=[];
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

  public getTopHeadLinesBySources(sourceId:any):Promise<any>
  {

      return new Promise((resolve,reject)=>{
        this.newsModel.getTopHeadLinesBySources(sourceId).then(result=>{
          console.log(result.status);
          if (result.status=="ok")
          {
            this.dataNews=result;
            resolve(result);
          }
          else
           reject({status:"fail",message:"No se trajo datos del modelo"});
        }).catch(error=>{
          reject({status:"fail", message:"Error conectando con el modelo"});
        })
      })

  }

}
