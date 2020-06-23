import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './mitsogo/navbar/navbar.component';
import { MainComponent } from './mitsogo/main/main.component';
import { DashboardComponent } from './mitsogo/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },  
  {path:'main',component:MainComponent},

  {path:'main',component:MainComponent,
  children:[    
    // {path:'navbar',component:NavbarComponent}, 
    {path:'dashboard',component:DashboardComponent},
         
]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
