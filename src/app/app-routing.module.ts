import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';

const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path : 'ourWork', component:OurWorkComponent},
  {path : 'aboutUs', component:AboutUsComponent},
  {path : 'contactUs', component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
