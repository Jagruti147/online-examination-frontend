import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Answer, Question, QuestionService } from '../question.service';
import { Subject } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

message: any='';
question:Question=new Question(0,'','','','','','','');
username:any='';
subject:any='';
httpclieant:any;
answer:Answer=new Answer(0,'','','')
submittedAnswer: any;
constructor(private services:QuestionService,private router:Router)
{
this.message=sessionStorage.getItem("message");

this.subject=sessionStorage.getItem("subject");
console.log("subject is" + this.subject)
services.getFirstQuestion(this.subject).subscribe(question=>this.question=question);
}

nextQuestion(){
  this.services.nextQuestion().subscribe(question=>this.question=question);
}

previousQuestion(){
  this.services.previousQuestion().subscribe(question=>this.question=question);
}


saveAnswer()
{
 this.answer.submittedAnswer=this.submittedAnswer;
 this.answer.OriginalAnswer=this.question.answer;
 this.answer.qno=this.question.qno;
 this.answer.qtext=this.question.qtext;
 this.services.saveAnswer(this.answer).subscribe();
 console.log("answer submitted");
	
}

endexam(){
  this.router.navigate(['score']);
}
}



