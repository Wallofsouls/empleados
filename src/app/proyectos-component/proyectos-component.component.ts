import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  constructor(private router: Router, private empleadosService: EmpleadosService) {

  }

  agregarEmpleado() {
    let miempleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje(miempleado.nombre + " " + miempleado.apellido + " agregado correctamente")
    this.empleadosService.agregarEmpleadoServicio(miempleado)
    this.router.navigate([""])
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  volverHome(): void {
    this.router.navigate([""])
  }
}
