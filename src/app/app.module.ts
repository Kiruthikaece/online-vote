import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { VoterComponent } from './voter/voter.component';
import { SuccessVoteComponent } from './success-vote/success-vote.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { MainMenuComponent } from './admin/main-menu/main-menu.component';
import { AddVoterComponent } from './admin/add-voter/add-voter.component';
import { UpdateVoterComponent } from './admin/update-voter/update-voter.component';
import { FormUpdationComponent } from './admin/update-voter/form-updation/form-updation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpVerificationComponent,
    VoterComponent,
    SuccessVoteComponent,
    AdminLoginComponent,
    MainMenuComponent,
    AddVoterComponent,
    UpdateVoterComponent,
    FormUpdationComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule ,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
