import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoterService } from 'src/service/voter.service';

@Component({
  selector: 'app-form-updation',
  templateUrl: './form-updation.component.html',
  styleUrls: ['./form-updation.component.css']
})
export class FormUpdationComponent implements OnInit  {

voterUpdateForm!:FormGroup;
states:any=[];
districts:any=[];
constituents:any=[];
userData:any;
selectedStateId:any;
selectedDistrictId:any;
selectedConstituentId:any;
genderList: string[] = ["Male", "Female", "Others"];

constructor(private fb: FormBuilder,private voterService:VoterService,private router:Router){}

ngOnInit() {
  const user = localStorage.getItem('UpdatedUser');
  if (user) 
  this.userData = JSON.parse(user);

  console.log('User Data:', this.userData);
  this.initializeForm();
  this.loadStates();
}

initializeForm() {
  this.voterUpdateForm = this.fb.group({
    fname: [this.userData.fname, [Validators.required]],
    lname: [this.userData.lname, [Validators.required]],
    aadhar: [this.userData.aadhar, [Validators.required]],
    phoneNo: [this.userData.phoneno, [Validators.required]],
    dob: [this.userData.dob, [Validators.required]],
    gender: [this.userData.gender, [Validators.required]],
    state_id: ['', [Validators.required]],
    district_id: ['', [Validators.required]],
    constituent_id: ['', [Validators.required]],
    id:[this.userData.id],
    voterId:[this.userData.id]
  });
}

loadStates() {
  this.voterService.getAllStates().subscribe((data) => {
    this.states = data;
    console.log('States Loaded:', this.states);

    const selectedState = this.states.find(
      (state: any) => state.name.toLowerCase() === this.userData.state.toLowerCase()
    );
    if (selectedState) {
      this.voterUpdateForm.patchValue({ state_id: selectedState.id });
      this.selectedStateId = selectedState.id;

      console.log('Selected State:', selectedState);
      this.onStateChange(); 
    }
  });
}


onStateChange() {
  if (this.selectedStateId) {
    this.voterService.getDistricts(this.selectedStateId).subscribe((data) => {
      this.districts = data;
      console.log('Districts Loaded:', this.districts);

      
      const selectedDistrict = this.districts.find(
        (District: any) => District.districtName.toLowerCase() === this.userData.District.toLowerCase()
      );
      if (selectedDistrict) {
        this.voterUpdateForm.patchValue({ district_id: selectedDistrict.id });
        this.selectedDistrictId = selectedDistrict.id;

        console.log('Selected District:', selectedDistrict);
        this.onDistrictChange(); 
      }
    });
  } else {
    console.warn('No State Selected!');
  }
}


onDistrictChange() {
  if (this.selectedDistrictId) {
    this.voterService.getConstituents(this.selectedDistrictId).subscribe((data) => {
      this.constituents = data;
      console.log('Constituents Loaded:', this.constituents);

      const selectedConstituent = this.constituents.find(
        (constituent: any) => constituent.constituentName.toLowerCase() === this.userData.constituent.toLowerCase()
      );
      if (selectedConstituent) {
        this.voterUpdateForm.patchValue({ constituent_id: selectedConstituent.id });
        console.log('Selected Constituent:', selectedConstituent);
      }
    });
  } else {
    console.warn('No District Selected!');
  }
}
UpdateVote() {

  console.log(this.voterUpdateForm.valid+"validation");
  console.log(this.voterUpdateForm.value+"update record");
   if(this.voterUpdateForm.valid) {
    const formData = this.voterUpdateForm.value;
     this.voterService.updateVoterDetails(formData).subscribe(
      (response)=> {
        console.log(response);
        alert('voter data updated successfully');
        this.router.navigate(['admin/update-voter']);
     },(error)=> {
      console.error('Error updating voter details:', error);
      alert('Failed to update voter details. Please try again later.');
     }
    );
   }else {
    console.warn('Form is invalid. Please correct the errors.');
    alert('Form is invalid. Please fill out all required fields.');
  }
 
}

}

