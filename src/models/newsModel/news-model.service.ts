import { Injectable } from '@angular/core';
import { HttpNewsService } from '../../services/http.newservice'
import { Observable} from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsModelService {

  public response:any;
  constructor(public newshttp:HttpNewsService)
  { 
     console.log("Modelo de news");
     //this.getSources(null);
  }

  getSources(params:any): Promise<any>
  {
    return new Promise((resolve, reject) => {
    let response: Observable<any>;
    response =this.newshttp.sendRequest("sources",params,"GET");
    response.subscribe(data => {
      //console.log('Canales: ', data);
      this.response=data;
      resolve(data);
    }, err => {
       console.log("error:"+err);
       reject({status:"error"});
    })
    
  });

  }

  getSourcesTopHeadLines(params:any): Promise<any>
  {
    let parameters = {
            sources: params.sourceid
        };  

    return new Promise((resolve, reject) => {
    let response: Observable<any>;
    response =this.newshttp.sendRequest("top-headlines",parameters,"GET");
    response.subscribe(data => {
      //console.log('Canales: ', data);
      this.response=data;
      resolve(data);
    }, err => {
       console.log("error:"+err); 
       reject({status:"error"});
    })
    
  });
}

  getNews(params:any): Promise<any>
  {
    let parameters = {
      sources: params
    };  

    return new Promise((resolve, reject) => {
    let response: Observable<any>;
    response =this.newshttp.sendRequest("top-headlines",parameters,"GET");
    response.subscribe(data => {
      //console.log('Canales: ', data);
      this.response=data;
      resolve(data);
    }, err => {
      console.log("error:"+err);
      reject({status:"error"});
    })
    
  });
  }

}
