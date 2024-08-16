import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  Nombre = "Juan";
  Apellido = "Mosquera";
  Edad = "23";
  Empresa = "BiteCode";

  constructor() { }

  ngOnInit(): void {
  }

}
