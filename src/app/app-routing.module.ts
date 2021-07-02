import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoComponent } from './components/memo/memo.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
    { path: '', component: MemoComponent},
    { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
