import { NgModule } from '@angular/core';
import { GarageComponent } from './components/garage.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GarageRoutingModule } from './garage-routing.module';



@NgModule({
    imports: [CommonModule, RouterModule, GarageRoutingModule],
    exports: [GarageComponent],
    declarations: [GarageComponent],
    providers: [],
})
export class GarageModule { }
