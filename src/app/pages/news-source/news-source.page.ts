import { Component, OnInit } from '@angular/core';
import { NewsControllService } from '../../controllers/news/news-controll.service';
import { HelperService } from '../../services/helper.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.page.html',
  styleUrls: ['./news-source.page.scss'],
})
export class NewsSourcePage implements OnInit {
  public data:any=[];
  public dataTemp:any=[];
  public filterTerm: any;
  public showLupa:any=true;
  public sourceId:any;
  constructor(public newCntrl:NewsControllService,
              public helper:HelperService,
              public route:ActivatedRoute,
              public router:Router,) 
  { 
     this.sourceId = this.route.snapshot.paramMap.get("sourceId"); // tomo el Id de la funete de noticias
     //this.getTopHeadLinesBySources();
    }

  ngOnInit() {
    this.getTopHeadLinesBySources();
  }

  public getTopHeadLinesBySources()
  {
    let myData:any;
    this.helper.showLoader("Refrescando Datos");
    this.newCntrl.getTopHeadLinesBySources(this.sourceId).then(result=>{
      console.log(result);
      myData = result;
      this.data =myData.articles; //result.articles;
      this.dataTemp = myData.articles;
      //this.helper.presentToast("Datos cargados correctamente",3000,"top");
      //this.helper.presentAlertOK("Datos cargados correctamente");
    }).catch(error=>{
      console.log("Error - Control no trajo datos");
      this.helper.presentToast("Error - Control no trajo datos",3000,"top");
      this.helper.presentAlertError("Error - Control no trajo datos");
    });
    this.helper.dismiss();
  }

  doRefresh(refresh:any)
  {
     this.getTopHeadLinesBySources();

     setTimeout(()=> {
         refresh.target.complete();
     },2000)
  }

  handleInputText(event:any)
  {
    let query = event.target.value.toLowerCase();
    console.log("esto es lo de Query :" + query);
    this.data = this.dataTemp;
    let filters ={
      title:query,
      description:query,
      content:query,
      author:query
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

    //Este es un metodo si yo quiero enviar otros parametros una pagina
  //Es invocado por un envento CLICK en la vista, se deja como
  openNew(params:any)
  {
    console.log(params);
    let data = {title:params.new.title,
                author:params.new.author,
                content:params.new.content,
                publishedAt:params.new.publishedAt,
                urlToImage:params.new.urlToImage,
                url:params.new.url


              };
    console.log(params);
    let objData = JSON.stringify(data);

    console.log(objData);
    this.router.navigate([`/new-detail/${objData}`]);
    //this.router.navigate([`/new-detail/${objData}`]);
    //this.router.navigate([`second/'+${objData}`]);
    //this.router.navigateByUrl('new-detail',objData);
    //this.router.navigate([`/new-detail/`],{queryParams:params});
  }

}
