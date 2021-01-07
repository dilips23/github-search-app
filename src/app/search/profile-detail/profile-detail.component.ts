import { Component, Input, OnInit } from '@angular/core';
import { ProfileDetail } from '../profile-detail-model';
import { ProfileSearchService } from '../profile-search.service';
import { UserProfile } from '../user-profile-model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  @Input() profile: ProfileDetail;
  selectedProfile: UserProfile;

  constructor(private profileSearchService: ProfileSearchService) { }

  ngOnInit(): void {
    this.profileSearchService.profileSelected.subscribe((userProfile: UserProfile) => {
      this.selectedProfile = userProfile;
    });
  }

  // set the favorite flag for the current record.
  onSetFavorite() {
    this.selectedProfile.isFavorite = 'true';
    this.profileSearchService.updateUserProfile(this.selectedProfile);
  }

}
