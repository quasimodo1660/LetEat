import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  { path: 'new',component:NewComponent},
  { path: 'home',component:HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'edit/:id',component:EditComponent},
  { path: 'review/:id',component:ReviewsComponent},
  { path: 'write/:id',component:WriteComponent},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
