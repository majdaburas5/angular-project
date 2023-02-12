import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  {  path:'', pathMatch: 'full',  redirectTo: 'login' },
  
  {path:'login',component:LoginComponent},
    
   { path: 'home', component:HomeComponent},

   {path: 'product', component:ProductComponent},
    
   { path: 'cart',component:CartComponent },
    
   { path: 'contacts',component:ContactsComponent },
    
   {path:'user',component:UserComponent},

    { path: '**',component:PagenotfoundComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
