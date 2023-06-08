import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpNewsService {

  public baseUrl: string="";
  public key="apiKey=6e8e6e6530c0449e85044f4d3c5a5d14";
  constructor( public http : HttpClient) 
  { 
      console.log("Hola construí la conexion");
  }

  sendRequest(action:any,parameters?:any,method?:any)
  {
    let httpheader={ 
                       headers: new HttpHeaders ({"Content-Type":"text/plain"})
                   }
    this.baseUrl="https://newsapi.org/v2/"+action;
    console.log(this.baseUrl);
    let params:any;
    if (parameters != null)
    {
       params="?";
       for(let k in parameters)
       {
         params+=k+"="+parameters[k]+"&";
       }

       this.baseUrl=this.baseUrl+params+this.key;
    }
    else
    {
      this.key="/?apiKey=6e8e6e6530c0449e85044f4d3c5a5d14";
      this.baseUrl=this.baseUrl+this.key;
    }  
    console.log(this.baseUrl);
    if(method =="GET")  

       return this.http.get(this.baseUrl,httpheader);
    else
       return this.http.post(this.baseUrl,httpheader);   
  }

}
