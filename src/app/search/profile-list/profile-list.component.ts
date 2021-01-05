import { Component, OnInit } from '@angular/core';

import { UserProfile } from '../user-profile-model';
import { ProfileSearchService } from '../profile-search.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
   profiles: UserProfile[] = [];
  
   constructor(private profileSerachService: ProfileSearchService) { }

  ngOnInit(): void {
    this.profileSerachService.getUserProfileList()
    .subscribe(profiles => {
      this.profiles = profiles;
    });
  }

  onProfileNameSelected(profile: UserProfile) {
     console.log('name selected.' + profile.login);
    this.profileSerachService.profileSelected.emit(profile);
  }
}
