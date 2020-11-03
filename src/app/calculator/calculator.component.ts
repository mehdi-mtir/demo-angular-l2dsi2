import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result : number;
  constructor() { }

  addition(val1 : HTMLInputElement, val2 : HTMLInputElement){
    this.result = parseInt(val1.value) + parseInt(val2.value);
    val1.value = "";
    val2.value = "";
  }

  soustraction(val1 : HTMLInputElement, val2 : HTMLInputElement){
    this.result = parseInt(val1.value) - parseInt(val2.value);
    val1.value = "";
    val2.value = "";
  }

  multiplication(val1 : HTMLInputElement, val2 : HTMLInputElement){
    this.result = parseInt(val1.value) * parseInt(val2.value);
    val1.value = "";
    val2.value = "";
  }

  division(val1 : HTMLInputElement, val2 : HTMLInputElement){
    if(parseInt(val2.value) == 0){
      this.result = 0
    }
    else{
      this.result = parseInt(val1.value) / parseInt(val2.value);
    }
    
    val1.value = "";
    val2.value = "";
  }

  ngOnInit() {
    this.result = 0;
  }

}
