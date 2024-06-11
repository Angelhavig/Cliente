import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})

// Funcion que realiza los filtros en la tabla de Personal
export class FiltroPipe implements PipeTransform {

  transform(items: any[], filtro: string): any[] {
    if (!items || !filtro) {
      return items;
    }
    return items.filter(item => 
      item.Apellido_Personal.toLowerCase().includes(filtro.toLowerCase()) || 
      item.Nombre_Personal.toLowerCase().includes(filtro.toLowerCase()) ||
      item.CURP.toLowerCase().includes(filtro.toLowerCase()) ||
      item.RFC.toLowerCase().includes(filtro.toLowerCase()) ||
      item.Correo.toLowerCase().includes(filtro.toLowerCase()) ||
      item.Telefono.toLowerCase().includes(filtro.toLowerCase())
    );
  }

}
