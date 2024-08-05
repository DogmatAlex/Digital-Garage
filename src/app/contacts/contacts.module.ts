import { NgModule } from '@angular/core';
import { ContactsComponent } from './components/contacts.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
    imports: [CommonModule, RouterModule, ContactsRoutingModule],
    exports: [ContactsComponent],
    declarations: [ContactsComponent],
    providers: [],
})
export class ContactsModule { }
