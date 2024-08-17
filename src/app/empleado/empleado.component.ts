import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  Nombre = "Juan";
  private Apellido = "Mosquera";
  Edad = 23;
  // Empresa = "BiteCode";

//Binding
  enableBox = false;

  usuRegistrado = true;

getRegistroUsuario(){
  this.usuRegistrado = false
}
  nombreEmpresa(value:string){

  }

  getApellido(){
    return this.Apellido;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
