'use strict';

import { Televisao } from "./televisao";

export class Controle{
    tv:Televisao

    constructor(tv:Televisao) {
        this.tv = tv
    }

    get Volume(){ //consulta volume
        return this.tv.volume
    }

    get Canal(){ //consulta canal
        return this.tv.canal
    }

    set MudaCanal(canal: number){ //troca canal
        this.tv.canal = canal
    }

    AumentaVol(){
        if(this.Volume <= 99){
            return this.tv.volume ++
        }
        else{
            return this.tv.volume = 100
        }
    }

    DiminuiVol(){
        if(this.Volume > 0){
            return this.tv.volume --
        }
        else {
            return this.tv.volume = 0
        }
    }

    AumentaCanal(){
        if(this.Canal >= 0 && this.Canal <= 799){ //canal >= 0 não seria necessário, pois tv já recebe canal = 0 como padrão
            return this.tv.canal ++
        }else{
            return this.tv.canal = 0
        }
    }

    DiminuiCanal(){
        if(this.Canal > 0 && this.Canal <= 800){
            return this.tv.canal --
        }else{
            return this.tv.canal = 0
        }
    }
}