import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { DetailsComponent } from './details/details/details.component';

const routes: Routes = [
  {path: '', redirectTo:'register',pathMatch:"full"},
  {path:"register", component:RegisterComponent},
  {path:"component", component:LoginComponent},
  {path:"details", component:DetailsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
