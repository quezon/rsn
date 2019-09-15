import { Component, OnInit, Input } from '@angular/core';
import { UserProfileBean } from 'src/UserProfileBean';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

 
  
  
@Input()
profile: UserProfileBean;
  ngOnInit() {
  }

}
