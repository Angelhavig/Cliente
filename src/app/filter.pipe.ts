import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filtro: string): any[] {
    if (!items || !filtro) {
      return items;
    }
    return items.filter(item => 
      item.Apellido_Personal.toLowerCase().includes(filtro.toLowerCase()) || 
      item.Nombre_Personal.toLowerCase().includes(filtro.toLowerCase()) ||
      item.Funciones.toLowerCase().includes(filtro.toLowerCase()) ||
      item.Inicio.toLowerCase().includes(filtro.toLowerCase()) ||
      item.Termino.toLowerCase().includes(filtro.toLowerCase())
    );
  }

}
