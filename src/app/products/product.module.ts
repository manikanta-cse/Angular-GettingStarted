import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';

import { ProductService} from './product.service';

import {ProductDetailGuard} from './product-guard.service';

import {ProductDetailComponent} from './product-detail.component';
import {ProductListComponent} from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';

import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations:[
        ProductDetailComponent,
        ProductListComponent,
        ProductFilterPipe
        
    ],
    imports:[   SharedModule,   
                RouterModule.forChild([
                 { path:'products', component: ProductListComponent},
                 {path:'product/:id',canActivate:[ProductDetailGuard],component:ProductDetailComponent},
            ])
    ],
    providers:[ProductDetailGuard,ProductService]
})

export class ProductModule{

}