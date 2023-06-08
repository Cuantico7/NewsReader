import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NewsControllService} from "../../controllers/news/news-controll.service";
@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {

   public newsIndex:any;
   public new:any;
   public data:any=[];

  constructor(public route:ActivatedRoute,
              public newCntrl:NewsControllService) 
  { 
    this.newsIndex = this.route.snapshot.paramMap.get("newsIndex");
    //console.log("Indice de la noticia:"+this.newsIndex);
    this.data= this.newCntrl.dataNews.articles;
    this.new = this.data[this.newsIndex];
    console.log(this.new);

  }

  ngOnInit() {
  }

  openUrl(url:any)
  {
     window.open(url);
     return false;
  }

}
