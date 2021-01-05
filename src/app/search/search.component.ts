import { Component, OnInit } from '@angular/core';

import { ProfileSearchService } from './profile-search.service';
import { UserProfile } from './user-profile-model';
import { ProfileDetail } from './profile-detail-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ProfileSearchService]
})
export class SearchComponent implements OnInit {

  selectedProfile: UserProfile; // For details view of the profile
  profileDetail: ProfileDetail;
  flag: boolean = true;

  profileList: any[] = [];

  constructor(private profileSearchService: ProfileSearchService) { }

  ngOnInit(): void {
    this.profileSearchService.profileSelected.subscribe((userProfile: UserProfile) => {
      this.selectedProfile = userProfile;
      this.getProfileDetail();
      this.flag = false;
    });
  }

  public getProfileDetail() {
    console.log('getProfileDetail called.' );
    this.profileSearchService.getUserDetailsByName(this.selectedProfile.login).subscribe(profileDetail => {
      this.profileDetail = profileDetail;
      console.log(this.profileDetail.name);
    });
  }

}
