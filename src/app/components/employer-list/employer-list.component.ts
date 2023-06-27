import { Component } from '@angular/core';
import { Employer } from 'src/app/models/Employer';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent {
  listEmployers : Employer[] = [
    { number : 1, name : "Juan", last_name : "Perez", genre : "M", salary : 25000},
    { number : 2, name : "Pablo", last_name : "Jaimez", genre : "M", salary : 50000},
    { number : 3, name : "Carla", last_name : "Paredez", genre : "F", salary : 35000},
    { number : 4, name : "maria", last_name : "carrero", genre : "F", salary : 35000},
    { number : 5, name : "Jonh", last_name : "Gomez", genre : "M", salary : 100000},
  ]

  selectRadioGenre:string = 'all';

  getTotalEmployers():number{
    return this.listEmployers.length;
  }

  getTotalMasculineEmployers():number{
    return this.listEmployers.filter(employ => employ.genre === 'M').length;
  }
  
  getTotalFemenineEmployers():number{
    return this.listEmployers.filter(employ => employ.genre === 'F').length;
  }

  updateRadioGenreSelection(newGenreSelection:string){
    this.selectRadioGenre = newGenreSelection;
  }
}
