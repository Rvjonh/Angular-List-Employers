export class Employer{
    number:number;
    name:string;
    last_name:string;
    genre: string;
    salary:number;

    constructor(number:number, name:string, last_name:string, genre:string, salary:number){
        this.number = number;
        this.name = name;
        this.last_name = last_name;
        this.genre = genre;
        this.salary = salary;
    }
}