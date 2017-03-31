import {Component,OnInit,OnDestroy} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

import {Subscription} from 'rxjs/Subscription';


import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    //selector: required only when we nesting component, as we are dealing wit routing no need
    moduleId:module.id,
    templateUrl: './product-detail.component.html'
})


export class ProductDetailComponent implements OnInit,OnDestroy{
    pageTitle:string="Product Detail";
    product:IProduct;
    errorMessage:string;
    private sub:Subscription;

    /**
     *
     */
    constructor(private _route:ActivatedRoute,private _router:Router,private _productservice:ProductService) {
        
        
    }

    ngOnInit(): void{
        // let id=  + this._route.snapshot.params['id'];
        // console.log(id)
        // this.pageTitle += ` : ${id}`

        this.sub= this._route.params.subscribe(params=>{ 
            let id=+ params['id'];
            this.getProduct(id);
         })
        
        
    }

    ngOnDestroy():void{
        this.sub.unsubscribe();
    }

    getProduct(id:number){
        this.sub = this._productservice.getProduct(id).subscribe(
            product=>this.product=product,
            error=>this.errorMessage=<any>error);
    }

    onBack():void{
        this._router.navigate(['/products']);
    }

    onRatingClicked(message:string):void{
        this.pageTitle='Product Detail: '+message;
    }

}