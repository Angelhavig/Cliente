import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
    const dateObj = new Date(value);
    const meses = [
      "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
      "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
    ];

    const dia = dateObj.getDate();
    const mes = meses[dateObj.getMonth()];
    const año = dateObj.getFullYear();

    return `${dia} DE ${mes} DE ${año}`;
  }

}
