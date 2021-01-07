import { Component, OnInit } from '@angular/core';

import { UserProfile } from '../search/user-profile-model';
import { ProfileDetail } from '../search/profile-detail-model';
import { SearchHistoryService } from './search-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [SearchHistoryService]
})
export class HistoryComponent implements OnInit {
  selectedProfile: UserProfile; // For details view of the profile
  profileDetail: ProfileDetail;
  flag: boolean = true;

  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit(): void {
    this.searchHistoryService.profileSelected.subscribe((userProfile: UserProfile) => {
      this.selectedProfile = userProfile;
      this.getProfileDetail();
      this.flag = false;
    });
  }

  public getProfileDetail() {
    this.searchHistoryService.getUserDetailsByName(this.selectedProfile.login).subscribe(profileDetail => {
      this.profileDetail = profileDetail;
    });
  }

}
