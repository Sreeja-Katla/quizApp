import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.scss']
})
export class QuizComponentComponent implements OnInit{


  form!:NgForm
  userName:string='';


  ngOnInit(): void {}
  constructor( private routing:Router){}
  onSubmit(){
    console.log(this.userName);
    localStorage.setItem("userName",this.userName)
  this.routing.navigate(["/questions"])
  }

}
