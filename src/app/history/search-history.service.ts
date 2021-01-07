import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { ProfileDetail } from '../search/profile-detail-model';
import { UserProfile } from '../search/user-profile-model';

@Injectable()
export class SearchHistoryService {
  clientid = '67dcb6709541de1e8112';
  clientsecret = '7ca33f1b344ce98baa315f297189a967918931ca';
  
  dbUrl = 'http://localhost:3000';
  gitUrl = 'https://api.github.com/users';
  
  profileSelected = new EventEmitter<UserProfile>();
  
  constructor(private http: HttpClient) { }

  // getProfile lists from search History
  public getSearchHistory() {
    console.log('getSearchHistory() in service.');
    return this.http.get<any[]>(`${this.dbUrl}` + '/feed/userprofiles');// Need subscribe
  }

  // search user details by name
  public getUserDetailsByName(profileName: string) {
    return this.http.get<ProfileDetail>(this.gitUrl + "/" + profileName + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
  }

  // Remove a record from history 
  // /feed//del-history/:profileId
  public deleteSearchHistory(profile: UserProfile ) {
    // const httpOptions = { headers: new HttpHeaders}
    return this.http.delete(`${this.dbUrl}` + '/feed/del-history/' + profile.id);
  }

  public handleErrors(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) { // client seide error
      errorMessage = `MESSAGE : ${error.error.message}`;
    } else { // server error
      errorMessage = `STATUS : ${error.status}, MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
