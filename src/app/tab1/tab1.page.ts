import { Component } from '@angular/core';
import { HttpNewsService } from '../api/http.newsservice';
import { Observable} from 'rxjs';
import { NewsControllService } from '../controllers/news/news-controll.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public data:any;
  public filterTerm: any;
  constructor( public newCntrl:NewsControllService) {
    console.log("Houston all OK in TAPS1!!!");
    this.getAllNewsSource();

    
  }

  getAllNewsSource()
  {
    this.newCntrl.getAllSources().then(result=>{
       this.data = result.sources;
    }).catch(error=>{
      console.log("Error - Control no trajo datos");
    });

  }

}// Fin clase
