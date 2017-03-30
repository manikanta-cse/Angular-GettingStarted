import { Component } from '@angular/core';

@Component({

    selector:'pm-app',
    template:`
    <div> <h1>{{pageTitle}}</h1>
       <pm-products></pm-products>
        </div>`

})

export class AppComponent{
    pageTitle: string = "Acme Product Mgmt"
    
}

//the three key areas of Component : class, metadata(Decorator), import