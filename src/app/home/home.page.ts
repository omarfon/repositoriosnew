import { Component } from '@angular/core';
import { HorasService } from '../horas.service';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public horas;

  public ocupados;
  public diaActual;
  public horaActual;
  public minuts;
  public seconds;
  public _minuts;
  public _seconds;

  slideOpts = {
    speed: 4500,
    initialSlide: 1,
    autoplay: {
      delay: 10000
    }
  };
  
  constructor(public horaPvr: HorasService) {
    /* console.log('consultorios:', this.consultorios);
    this.ocupados = this.consultorios.filter((x:any) => x.personas.estado == 'C'); */
    console.log("ocupados:", this.ocupados);
    this.getHorasPaciente();
    this.startTime();
  }

checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
} 

  startTime() {
    setInterval(()=>{ 
      this.diaActual = new Date();
      this.horaActual = this.diaActual.getHours();
      this._minuts = this.diaActual.getMinutes();
      this._seconds = this.diaActual.getSeconds();
      this.minuts = this.checkTime(this._minuts);
      this.seconds = this.checkTime(this._seconds);
    },500);
}

  getHorasPaciente() {
    setInterval(() => {
      this.horaPvr.getHoras().subscribe(data => {
        this.horas = data;
        console.log(this.horas);
      });
    }, 10000);
    
   /*    this.horaPvr.getHoras().subscribe(data => {
        this.horas = data;
        console.log(this.horas);
      }); */
    
  }
}
