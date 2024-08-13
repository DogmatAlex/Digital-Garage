import { NgModule } from '@angular/core';
import { GarageComponent } from './components/garage.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GarageRoutingModule } from './garage-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [CommonModule, RouterModule, GarageRoutingModule, FormsModule],
    exports: [GarageComponent],
    declarations: [GarageComponent],
    providers: [],
})
export class GarageModule { }
