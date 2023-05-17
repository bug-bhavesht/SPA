import { Component } from "@angular/core";


// Decorator gives us the way to modify the behavior of a class or the property just by placing it on the top of the class or at the left of the property.
 @Component({
    selector: 'app-property-card',
    // template: `<h1>I am a card</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: ['h1 {font-weight: normal}']
    styleUrls: ['property-card.component.css']
 }
 )
// export is required here in order to use/import this class in other components.
export class PropertyCardComponent 
{
   Property:any = {
      "Id":1,
      "Name":"Poona",
      "Type":"Villa",
      "Price":"1.2 Cr"
   }
}