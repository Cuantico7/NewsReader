import { Component, OnInit } from '@angular/core';
import { UserControllService} from '../../controllers/users/user-controll.service';
import { HelperService} from '../../services/helper.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login = {email:'',
                  password:''
                 };

  public credentials = { email:'pmarmol@gmail.com',
                         password:'12345'
                       }
  constructor( public userCntrl:UserControllService,
               public helper:HelperService,
               public router:Router) 
  { 
       //this.autenticar();
  }

  ngOnInit() {
  }

  autenticar()
  {
    this.credentials = {email:this.login.email,password:this.login.password};

     this.userCntrl.autenticar(this.credentials).then( result=>{
         console.log(result);
         if (result.data.length>0)
         {
            this.helper.presentToast(result.data[0].nombre+ " - Bienvenido ",2000,"top");
            this.router.navigateByUrl('/home/tabs/tab1');
         }
         else
         {
           this.helper.presentToast(result.message,2000,"top");
         }

     }).catch(respuesta=>{
           this.helper.presentToast("Error:"+respuesta.message,2000,"top");
     });
  }


  singup()
  {
    console.log("Hola , voy a registrarme");
  }

}
