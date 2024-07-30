import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule, LoginRoutingModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
