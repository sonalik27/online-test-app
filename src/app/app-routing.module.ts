import {Routes} from "@angular/router"
import { AboutComponent } from "./about/about.component"
import { HomeComponent } from "./home/home.component"
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component"
import { QuizComponent } from "./quiz/quiz.component"
import { ResultComponent } from "./result/result.component"

export const applicationRoutes: Routes = [
    // {path: '', component: HomeComponent},
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'quiz', component: QuizComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'result', component: ResultComponent},
    {path: '**', component: PagenotfoundComponent}
]