import { Injectable } from '@angular/core';

import {ToastController,
        LoadingController,
        AlertController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export  class HelperService {

 public loading: any;
 public isLoading = false;
  constructor( public loadingCtrl: LoadingController,
  	           public toastController : ToastController,
  	           private alertCtrl: AlertController ) 
  { 
  }



async showLoader(message:string) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      // duration: 5000,
      message: message
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  async dismiss1(){
    this.checkAndCloseLoader();
	
    // sometimes there's delay in finding the loader. so check if the loader is closed after one second. if not closed proceed to close again
      setTimeout(() => this.checkAndCloseLoader(), 1000);
    
  }

 async checkAndCloseLoader() {
    // Use getTop function to find the loader and dismiss only if loader is present.
    const loader = await this.loadingCtrl.getTop();
    // if loader present then dismiss
     if(loader !== undefined) { 
      this.loadingCtrl.dismiss();
       //await  loader.dismiss(); // this.loadingCtrl.dismiss();
       this.loading.dismiss();
     }
     //this.loadingCtrl.dismiss();
   }


  async presentToast(message:any,duration:any,position:any) {
    const toast = await this.toastController.create({
      message: message,
      position : position,
      duration: duration,
      cssClass: `   --background:white !important;
                    --color:black !important;
                `
    });
    //this.loading.dismiss();
    toast.present();
  } 


  async presentAlertError(message:any) {
    let alert = await this.alertCtrl.create({
      //enableBackdropDismiss: false,
      header: 'Lo Sentimos',
      message: message,
      mode:'ios',
      buttons: ['Aceptar'],
      cssClass: `.alert-message {
                      text-align: justify;
                    } 
                `
    });
    await alert.present();
  }

  /* Mensaje de alerta. */
  async presentAlertOK(message:any) {
    let alert = await this.alertCtrl.create({
      //enableBackdropDismiss: false,
      header: 'En hora buena',
      message: message,
      mode:'ios', 
      buttons: ['Aceptar'],
      cssClass: 'alertCustomCss'
    });
    await alert.present();
  }


}