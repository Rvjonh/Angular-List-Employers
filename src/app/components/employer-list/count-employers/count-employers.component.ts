import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-employers',
  templateUrl: './count-employers.component.html',
  styleUrls: ['./count-employers.component.css']
})
export class CountEmployersComponent {
  selectRadioGenre:string = 'all';

  @Input() all:number;
  @Input() m:number;
  @Input() f:number;

  @Output() changeSelectionRadioGenre = new EventEmitter<string>();

  constructor(){
    this.all = 0;
    this.m = 0;
    this.f = 0;
  }

  changeSelectionRadioGenreMethod():void{
    this.changeSelectionRadioGenre.emit(this.selectRadioGenre);
  }
}
