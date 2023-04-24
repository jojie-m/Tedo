import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//heres the import
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
////
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule],//<= i included it here
  declarations: [ContactComponent],
  entryComponents: [],
  providers: [],
  bootstrap: [ContactComponent],
})
export class ContactModule { }
