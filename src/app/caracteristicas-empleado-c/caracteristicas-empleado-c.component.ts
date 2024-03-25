import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServicioEmpleadosService } from 'src/app/servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) {
  }

  agregarCaracteristicas(value: string) {
    this.miServicio.muestraMensaje(value + " agregada correctamente")
    this.caracteristicasEmpleados.emit(value);
  }

  ngOnInit(): void {

  }

}
