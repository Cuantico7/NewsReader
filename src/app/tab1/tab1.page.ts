import { Component } from '@angular/core';
import { HttpService } from '../api/http.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public data:any;
  public filterTerm: any;
  constructor( http:HttpService) {
    console.log("Houston all OK in TAPS1!!!");
    let response : Observable<any>;
    response = http.sendRequest("sources");

    response.subscribe(respuesta=>{
       console.log(respuesta);
       this.data=respuesta;
    }, err=>{
         console.log(err);
    })

    
  }

}// Fin clase
