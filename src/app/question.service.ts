import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Question
{
  qno:number;
  subject:String;
	 qtext:string;
    op1:string;
    op2:string;
    op3:string;
    op4:string;
   answer:String;

   constructor(qno:number, subject:String,qtext:string,op1:string,op2:string,  op3:string ,op4:string, answer:String)
   {
this.qno=qno;
this.subject=subject;
this.qtext=qtext;
this.op1=op1;
this.op2=op2;
this.op3=op3;
this.op4=op4;
this.answer=answer;
   }
}
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
//getFirstQuestion
  constructor(private httpclient:HttpClient) 
  {

   }
   getFirstQuestion(subject:String)
   {
     return this.httpclient.get<Question>("http://localhost:8080/getFirstQuestion/"+subject);
   }
   nextQuestion():Observable<Question>
   {
    return this.httpclient.get<Question>("http://localhost:8080/nextQuestion");
   }

   previousQuestion():Observable<Question>
   {
    return this.httpclient.get<Question>("http://localhost:8080/previousQuestion");
   }

   saveAnswer(answer:Answer):Observable<void>
   {
    return this.httpclient.post<void>("http://localhost:8080/saveAnswer",answer);
   }

   endexam()
   {
   return this.httpclient.get<number>("http://localhost:8080/endexam");
   }

   getAllAnswer(){
    return this.httpclient.get<Answer[]>("http://localhost:8080/getAllAnswer");
   }
}
export class Answer
{

   qno:number;
	 qtext:String;
	 submittedAnswer:String;
	 OriginalAnswer:String;

   constructor(qno:number,qtext:String,submittedAnswer:String,OriginalAnswer:String)
   {
       this.qno=qno;
       this.qtext=qtext;
       this.submittedAnswer=submittedAnswer;
       this.OriginalAnswer=OriginalAnswer;
    
   }

}
