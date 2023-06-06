import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public baseUrl: string="";
  public key="?apiKey=6e8e6e6530c0449e85044f4d3c5a5d14";
  constructor( public http : HttpClient) 
  { 
      console.log("Hola construí la conexion");
  }

  sendRequest(action:any)
  {
    let httpheader={ 
                       headers: new HttpHeaders ({"Content-Type":"text/plain"})
                   }
    this.baseUrl="https://newsapi.org/v2/"+action+this.key;
    console.log(this.baseUrl);
    return this.http.get(this.baseUrl,httpheader);
  }

}
