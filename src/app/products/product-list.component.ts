import {Component,OnInit } from '@angular/core';

import { IProduct } from './product'

import {ProductService} from './product.service';

@Component({

    //selector:'pm-products', // can be removed because this was managed by routing not nesting any more
    moduleId:module.id, // for relative paths
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
    //styles:['thead{    color: #337AB7;}'] inline styles

})


export class ProductListComponent implements OnInit {
    pageTitle: string = 'products list';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean =false;
    listFilter: string;
    errorMessage:string;

    products: IProduct[];
    

    constructor(private _productService: ProductService){

    }

    toggleImage():void{
        this.showImage=!this.showImage;


    }

    ngOnInit():void{
        //console.log('ngOnInit');
        this._productService.getProducts()
                          .subscribe(products=> this.products = products,
                           error=>this.errorMessage= <any>error);
    }

    onRatingClicked(message:string):void{
        this.pageTitle='Products List:'+ message;
    }


}