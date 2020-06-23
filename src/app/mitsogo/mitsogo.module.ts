import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [NavbarComponent, DashboardComponent, MainComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgApexchartsModule
  ]
})
export class MitsogoModule { }
