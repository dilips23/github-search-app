import { Component, Input, OnInit } from '@angular/core';
import { ProfileDetail } from '../profile-detail-model';
import { ProfileSearchService } from '../profile-search.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  @Input() profile: ProfileDetail;
  

  constructor(private profileSearchService: ProfileSearchService) { }

  ngOnInit(): void {
  }

}
