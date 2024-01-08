import { Pipe, PipeTransform } from '@angular/core';
import * as numberToWords from 'number-to-words';


@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  transform(value: number): string {
    try{
        return numberToWords.toWords(value);
    }catch(err){
        return "";
    }
  }
}
