import { Routes } from '@angular/router';
import { Home } from './Page/home/home';
import { Product } from './Page/product/product';
import { Contact } from './Page/contact/contact';
import { ProductDetails } from './Page/product-details/product-details';
import { Abt } from './Page/abt/abt';
import { Service } from './Page/service/service';
import { Insight } from './Page/insight/insight';
import { Career } from './Page/career/career';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'products', component: Product },
    { path: 'products/:id', component: ProductDetails },
    { path: 'contact', component: Contact },
    {path:'abt',component:Abt},
    {path:'service',component:Service},
    {path:'insight',component:Insight},
    {path:'career',component:Career}
];
