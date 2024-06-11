import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { EuaComponent } from './pages/eua/eua.component';
import { FranceComponent } from './pages/france/france.component';
import { UkComponent } from './pages/uk/uk.component';
import { ItalyComponent } from './pages/italy/italy.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'eua', component: EuaComponent },
  { path: 'france', component: FranceComponent },
  { path: 'uk', component: UkComponent },
  { path: 'italy', component: ItalyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }