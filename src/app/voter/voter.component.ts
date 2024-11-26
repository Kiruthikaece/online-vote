import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoterService } from 'src/service/voter.service';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {



  voterData:any={};

  states:any[]=[];
  districts:any[]=[];
  constituents:any[]=[];
  parties:any[]=[];

  selectedStateId: number | null=null;
  selectedDistrictId: number | null = null;
  selectedPartyId: any;
  

constructor(private voterService:VoterService,
  private router:Router
) {}

  ngOnInit() {
      const userData=localStorage.getItem('loggedInUser');
      if(userData)
        this.voterData=JSON.parse(userData);

      this.loadParty();
  }


  loadParty() {
      this.voterService.getAllParty().subscribe(data=> {
        this.parties=data;
      });
  }


  submitVote() {
    this.voterService.updateVote(this.voterData.voterId, this.selectedPartyId).subscribe({
        next: (data: any) => {
            console.log("Submitted successfully", data);
            alert(data.message || 'Vote submitted successfully!');
            this.router.navigate(['/success']);
        },
        error: (error) => {
            console.error("Error submitting vote:", error);
            const errorMessage = error.error?.error || error.message || 'Please try again later.';
            alert(`Error submitting vote: ${errorMessage}`);
        }
    });
}




  
  

  // onStateChange() {

  //   console.log(this.selectedStateId+"this.selectedStateId");
  //   if(this.selectedStateId) {
  //     this.voterService.getDistricts(this.selectedStateId).subscribe(data=> {
  //       this.districts=data;
  //     });
  //   }
    
  // }


  // onDistrictChange() {
  //   console.log(this.selectedDistrictId + " this.selectedDistrictId");
  //   if (this.selectedDistrictId) {
  //     this.voterService.getConstituents(this.selectedDistrictId).subscribe(data => {
  //       console.log("Received Constituents:", data);
  //       this.constituents = data;
  //     });
  //   }
  // }
  

}
