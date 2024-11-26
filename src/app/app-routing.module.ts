import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { VoterComponent } from './voter/voter.component';
import { SuccessVoteComponent } from './success-vote/success-vote.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { MainMenuComponent } from './admin/main-menu/main-menu.component';
import { AddVoterComponent } from './admin/add-voter/add-voter.component';
import { UpdateVoterComponent } from './admin/update-voter/update-voter.component';
import { FormUpdationComponent } from './admin/update-voter/form-updation/form-updation.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'otp', component: OtpVerificationComponent ,canActivate: [AuthGuard]}, 
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'vote',component:VoterComponent,canActivate: [AuthGuard]},
  {path:'success',component:SuccessVoteComponent,canActivate: [AuthGuard]},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin/menu' ,component:MainMenuComponent},
  {path:'admin/add-voter',component:AddVoterComponent},
  {path:'admin/update-voter',component:UpdateVoterComponent},
  {path:'admin/update-voter/updation',component:FormUpdationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
