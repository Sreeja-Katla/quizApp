import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponentComponent } from './questions-component/questions-component.component';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';

const routes: Routes = [
  { path:"" ,component:QuizComponentComponent},
  { path:"quiz" ,component:QuizComponentComponent},
  { path:"questions" ,component:QuestionsComponentComponent},
  { path:"**" ,component:QuizComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
