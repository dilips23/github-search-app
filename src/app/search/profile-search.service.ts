import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { UserProfile } from './user-profile-model';
import { ProfileDetail } from './profile-detail-model';


@Injectable()
export class ProfileSearchService {
  clientid = '67dcb6709541de1e8112';
  clientsecret = '7ca33f1b344ce98baa315f297189a967918931ca';

  gitUrl = 'https://api.github.com/users';
  perPage = 500;

  profileSelected = new EventEmitter<UserProfile>();
  userProfileList: UserProfile[] = [];

  constructor(private http: HttpClient) { }

  // Get user profiles from Github
  public getUserProfileList() {
    return this.http.get<any[]>(`${this.gitUrl}?per_page=${this.perPage}`);
  }

  // search user details by name
  public getUserDetailsByName(profileName: string) {
    return this.http.get<ProfileDetail>("https://api.github.com/users/" + profileName + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
    console.log(profileName + ' in the service.');
  }

  // search user details by repos
  public getUserDetailsByRepos() {

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
