import { Injectable } from '@angular/core';
import {NewsModelService} from '../../models/newsModel/news-model.service';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class NewsControllService {
  

  data: { status: string, 
          sources: any} = 
          {
           status: 'ok',  
           sources: []
          };
  //public params: { action: string } = {action: 'other'};

  constructor( public newsModel: NewsModelService) 
  { 
     //console.log("Entreee al control");
     //let data=this.getSources();
  }

  public getSources()
  {
    return new Promise((resolve, reject) => {
    let response: any;
    this.newsModel.getSources(null).then(result => {
      //console.log(result);
      resolve(result);
    }).catch(error => {
      console.log("Error :" + error);
      //resolve({});
      reject({status:"error"});
    }); 

  });
  }

  public getSourcesTopHeadLines()
  {
    return new Promise((resolve, reject) => {
    let response: any;
    this.newsModel.getSourcesTopHeadLines({sourceid: 'bbc-news'}).then(result => {
            //console.log(result);
            resolve(result);
          }).catch(error => {
            console.log("Error :" + error);
            //resolve({});
            reject({status:"error"});
          }); 

    });
  }
  
  public getHeadLines(){
    
    return this.newsModel.getNews({action: 'other'});
  }
}
