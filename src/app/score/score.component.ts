import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Answer, QuestionService } from '../question.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{

totalscore:number=0;
allanswers:Answer[]=[];
allanswer: any;
constructor(private questionService:QuestionService)
{


}
  ngOnInit(): void 
  {
   this.questionService.endexam().subscribe(answer=>this.totalscore=answer);

   this.questionService.getAllAnswer().subscribe(answerarray=>this.allanswer=answerarray);
  }
getColor(submittedAnswer:string,OriginalAnswer:string)
{
if(submittedAnswer==OriginalAnswer)

  return "green";
  else
  return "red";

 

}
}

