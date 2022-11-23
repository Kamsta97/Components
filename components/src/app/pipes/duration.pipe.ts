import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
    transform(value?: string) {
        if(value != null) {
            if(value?.includes(':')) {
                let values = value.split(':');
                if(values[0].length === 1) {
                    values[0] = '0' + values[0];
                    let joinStrings = values.join(':');
                    value = joinStrings;
                }
            } else {
                if(value.length === 1 && value[0] !== '0') {
                    value = '0' + value + ':00';
                } 
            }
        }
        
        return value;
    }
}