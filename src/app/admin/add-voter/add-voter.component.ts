import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/service/User.service';
import { VoterService } from 'src/service/voter.service';

@Component({
  selector: 'app-add-voter',
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css']
})
export class AddVoterComponent implements OnInit{

  voterForm!: FormGroup;
  states:any=[];
  districts:any=[];
  constituents:any=[];

  selectedStateId:any;
  selectedDistrictId:any;

  genderList: string[] = ["Male", "Female", "Others"];

  constructor(private fb: FormBuilder,private voterService:VoterService,private userService:UserService) {}

  ngOnInit(): void {
    this.voterForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      aadhar: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      state_id: ['', [Validators.required]],
      district_id:['', [Validators.required]],
     constituent_id: ['', [Validators.required]],
    });

    this.loadStates();
  }

  onSubmit() {
    console.log(this.voterForm.valid + " valid");
    if (this.voterForm.valid) {
      this.voterService.addVoter(this.voterForm.value).subscribe(
        (response: any) => {
          if (response.status === 'success') {
            alert(response.message); 
            this.reset();
          } else {
            alert('Something went wrong: ' + response.message);
          }
        },
        (error: any) => {
          if (error.status === 409) {
            alert('Error: ' + error.error.message); 
          } 
          else if(error.status ==400) {
            alert('Error: ' + error.error.message); 
          }
          else {
            console.error(error);
            alert('An unexpected error occurred: ' + error.message);
        }
      }
      );
    }
  }
  

  reset() {
    this.voterForm.reset({
      fname: '',
      lname: '',
      aadhar: '',
      phoneNo: '',
      dob: '',
      gender: '',
      state_id: '',
      district_id: '',
      constituent_id: ''
    })
  }
  
 
  loadStates() {
    this.voterService.getAllStates().subscribe(data => {
      this.states = data;  
    });
  }

  onStateChange() {
    
     console.log(this.selectedStateId+"stateId");
    if(this.selectedStateId) {
      this.voterService.getDistricts(this.selectedStateId).subscribe(data=>{
        this.districts=data;
      });
    }
  }

  onDistrictChange() {
    if (this.selectedDistrictId) {
      this.voterService.getConstituents(this.selectedDistrictId).subscribe(
        (response: any) => {
          this.constituents = response;
          // Ensure that the first constituent is selected by default (if needed)
          this.voterForm.patchValue({ constituent: this.constituents[0]?.id });
        },
        (error) => console.error('Failed to fetch constituents', error)
      );
    }
  }
  
  
}
