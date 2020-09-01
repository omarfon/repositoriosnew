import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HorasService {

 

  /* private apiUrl = "https://dappapache02.eastus.cloudapp.azure.com/middleware2-copy/api/v2/ebooking-mssql/citas-consultorios-2"; */
  /* private apiUrl = "https://api.aviva.pe/middleware2/api/v2/ebooking-mssql/citas-consultorios-2?ubiacion=56"; */
  private apiUrl = "https://api.aviva.pe/middleware2/api/v2/ebooking-mssql/citas-consultorios-2";
  //

  constructor(public http: HttpClient) { }


  getHoras(){
    return this.http.get(this.apiUrl).pipe(
      map(resp =>{
        return resp
      })
    )
           }

}
