import { Component, Input, OnInit } from '@angular/core';

import { ProfileDetail } from '../../search/profile-detail-model';
import { UserProfile } from '../../search/user-profile-model';
import { SearchHistoryService } from '../search-history.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() profile: ProfileDetail;
  selectedProfile: UserProfile;
  
  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit(): void {
    this.searchHistoryService.profileSelected.subscribe((userProfile: UserProfile) => {
      this.selectedProfile = userProfile;
    });
  }

}
