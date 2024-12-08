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
import { AddVoterComponent } from './admin/add-voter/add-voter.component';
import { UpdateVoterComponent } from './admin/update-voter/update-voter.component';
import { FormUpdationComponent } from './admin/update-voter/form-updation/form-updation.component';
import { PickVoteComponent } from './pick-vote/pick-vote.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtpVerificationComponent,
    VoterComponent,
    SuccessVoteComponent,
    AddVoterComponent,
    UpdateVoterComponent,
    FormUpdationComponent,
    PickVoteComponent,
    HeaderComponent,
    
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
