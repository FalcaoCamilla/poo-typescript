'use strict';

export class Televisao{
    volume: number;
    canal: number;
    
    constructor(vol: number, canal: number){
        this.volume = 0;
        this.canal = 0;
    }

    get Volume(){
        return this.volume
    }

    get Canal(){
        return this.canal
    }
}