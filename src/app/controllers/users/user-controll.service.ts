import { Injectable } from '@angular/core';
import { UserModelService } from '../../models/users/user-model.service';

@Injectable({
  providedIn: 'root'
})
export class UserControllService {

  constructor( public userModel:UserModelService) 
  {
    console.log("Construi mi control usuario");
  }

  public autenticar(params:any):Promise<any>
  {

      return new Promise((resolve,reject)=>{
        this.userModel.autenticar(params).then(result=>{
          console.log(result);
          if (result.status=="200")
            resolve(result); // Retorna
          else
           reject({status:"fail",message:"No se trajo datos del modelo"});
        }).catch(error=>{
          reject({status:"fail", message:"Error conectando con el modelo UsersModel"});
        })
      })

  }

}
