import { Component } from '@angular/core';
import { HttpNewsService } from '../api/http.newsservice';
import { Observable} from 'rxjs';
import { NewsControllService } from '../controllers/news/news-controll.service';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public data:any=[];
  public dataTemp:any=[];
  public filterTerm: any;
  public showLupa:any=true;
  constructor( public newCntrl:NewsControllService,
               public helper:HelperService) {
    console.log("Houston all OK in TAPS1!!!");
    this.getAllNewsSource();

    
  }

  doRefresh(refresh:any)
  {
     this.getAllNewsSource();

     setTimeout(()=> {
         refresh.target.complete();
     },2000)
  }

  getAllNewsSource()
  {
      let myData:any;
      this.helper.showLoader("Refrescando Datos");
      this.newCntrl.getAllSources().then(result=>{
        console.log(result);
        myData = result;
        this.data =myData.sources; //result.sources;
        this.dataTemp = myData.sources;
        //this.helper.presentToast("Datos cargados correctamente",3000,"top");
        //this.helper.presentAlertOK("Datos cargados correctamente");
      }).catch(error=>{
        console.log("Error - Control no trajo datos");
        this.helper.presentToast("Error - Control no trajo datos",3000,"top");
        this.helper.presentAlertError("Error - Control no trajo datos");
      });
      this.helper.dismiss();

  }

  handleInputText(event:any)
  {
    let query = event.target.value.toLowerCase();
    console.log("esto es lo de Query :" + query);
    this.data = this.dataTemp;
    let filters ={
      name:query,
      description:query,
      category:query,
      language:query
    }

    if (query == '')
      this.data = this.dataTemp;
      /// Aqui llamamos al filtrador
      this.data = this.filtrador(filters)
  }

  public filtrador(params:any)
  {
     return this.data.filter((item:any) =>{
      for (let key in params )
      {
         let field = item[key];
         if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >=0){
           return item;
         }
         else if ( field == params[key])
          return item;
      } // Fin del ciclo

     }

     )// fin del filter
  } // Fin del metodo



  cancelSearhText(event:any)
  {
     console.log("Cancelé ......");
     this.data = this.dataTemp;//<--- Al cancelar debe volver a la lista original guardada dataTemp
     this.showLupa=true;
  }

  showSearchTextBox()
  {
     if (this.showLupa)
     {
        this.showLupa=false;
     }
     else
     {
      this.showLupa=true;
     }
  }
}// Fin clase
