import { Component, OnInit } from '@angular/core';

import { UserProfile } from '../../search/user-profile-model';
import { SearchHistoryService } from '../search-history.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  profiles: UserProfile[] = [];
  selectedRec: UserProfile;

  constructor(private searchHistorService: SearchHistoryService) { }

  ngOnInit(): void {
    this.searchHistorService.getSearchHistory()
    .subscribe(resData => {
      // console.log('profiles got - ' + resData.records);
      this.profiles = resData.records;
    }, err => {
      console.log(err);
    });
  }

  onProfileNameSelected(profile: UserProfile) {
    this.searchHistorService.profileSelected.emit(profile);
  }

  onChecked(profile: UserProfile) {
    this.selectedRec = profile;
    // console.log(this.selectedRec.id);
  }

  onRecordDelete() {
    this.searchHistorService.deleteSearchHistory(this.selectedRec).subscribe(res => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Deleting record failed.');
      }
      // return res.json();
    });
  }

}
