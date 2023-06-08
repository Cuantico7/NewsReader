import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpAppService {

  public baseUrl: string="";
  public keyApi="";
  constructor( public http : HttpClient) 
  { 
      console.log("Hola construí la conexion a mi Api WEB");
  }

  sendRequest(action:any,parameters:any,method?:any)
  {
    let httpheader={ 
                       headers: new HttpHeaders ({"Content-Type":"text/plain"})
                   }
    //this.baseUrl="https://testapiadso.000webhostapp.com/project/api/"+action;
    this.baseUrl="https://testsenaapi.000webhostapp.com/proyecto/api/"+action;
    
    console.log(this.baseUrl);
    let params:any;
    if (parameters != null && method== "GET")
    {
       params="?";
       for(let k in parameters)
       {
         params+=k+"="+parameters[k]+"&";
       }
       console.log(params);
       this.baseUrl=this.baseUrl+params+"apiKey="+this.keyApi;
    }
 
    console.log(this.baseUrl);
    if(method =="GET")  

       return this.http.get(this.baseUrl,httpheader);
    else //POST
    {
       console.log(parameters);
       let data: FormData = new FormData();
       data.append('email',parameters.email);
       data.append('password',parameters.password);
       return this.http.post(this.baseUrl,data);  
    }    
  }

}
