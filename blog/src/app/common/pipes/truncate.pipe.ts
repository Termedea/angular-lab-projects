import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, ...args: unknown[]): string {
        let limit: number = args[0] ? (args[0] as number) : 100;
        let trail: string = args[1] ? (args[1] as string) : '... ';
        console.log(limit + ' ' + trail);
        value = value.substring(0, limit) + trail;

        return value;
    }
}
