import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voter } from 'src/model/Voter.model';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  private  baseUrl="https://pacific-adaptation-production.up.railway.app/api";
  
  constructor(private httpClient:HttpClient) { }


  getAllStates():Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/states`);
  }

  getDistricts(stateId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/district/${stateId}`);
  }

  getConstituents(districtId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/constituent/${districtId}`);
  }

  getAllParty():Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/party`);
  }

  updateVote(voterId: number, partyId: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      voterId: voterId,
      partyId: partyId,
      isVote: true 
    };
    return this.httpClient.put(`${this.baseUrl}/submit-vote`, body, { headers });
  }

  addVoter(voterData:any):Observable<any> {
      return this.httpClient.post<any>(`${this.baseUrl}/add-voter`,voterData)
  }

  getStateVoterCount():Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/state-voter-count`);
  }

  updateVoterDetails(voterdetails:any) {
    return this.httpClient.put(`${this.baseUrl}/update-voter`,voterdetails);
  }
}
