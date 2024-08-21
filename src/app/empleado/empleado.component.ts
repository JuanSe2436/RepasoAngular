import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  Nombre = 'Juan';
  private Apellido = 'Mosquera';
  Edad = 23;

  Empresa = "BiteCode";
  //Binding
  enableBox = false;

  usuRegistrado = false;

  textoRegistro = "No hay nadie registrado";

  // cambiaEmpresa(event:Event){
  //   this.Empresa=(<HTMLInputElement>event.target).value;

  // }

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event:Event){
    if ((<HTMLInputElement>event.target).value== "Si") {
      this.textoRegistro="El usuario se acaba de registrar";
    }else{
      this.textoRegistro="No hay nadie registrado";
    }
    //alert ("El usuario se acaba de registrar");
    //this.textoRegistro="El usuario se acaba de registrar";
  }

  nombreEmpresa(value: string) {}

  getApellido() {
    return this.Apellido;
  }
  constructor() {}

  ngOnInit(): void {}
}
