import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo:'/products',  pathMatch: 'full'},
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
