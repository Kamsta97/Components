import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {
    transform(value?: string) {
       var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'dd.MM.yyyy') || '01.01.1900';
        return value;
    }
}