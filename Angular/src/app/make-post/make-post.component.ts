import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SessionStorageService, SessionStorage } from 'ngx-webstorage';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent implements OnInit {

  constructor(private fb: FormBuilder, private session: SessionStorageService,private _http: RegistrationService, private router:Router) {
    this.retrieveSessionUser();
  }

    @SessionStorage('user')
    profile: any;

    
newPostObject: any;


  newPost = this.fb.group({
    post_body: 'Your Text Here',
    photo: 'image',
    
  });

 makePostObject(){   //this method assigns the necesary values neede from the userProfile and the forms i the HTML to submit a new post to the Database.
  this.newPostObject ={
    photo: this.newPost.value.photo,
    post_body: this.newPost.value.post_body,
    profile: this.profile
  }
   this.addPost(this.newPostObject);
 }

  ngOnInit() {
    this.retrieveSessionUser()
  }

  retrieveSessionUser(){
    this.profile = this.session.retrieve('user');
  }

  addPost(object: any){
    console.log(object);
    this._http.newPost(object)
    //this._http.post<any>(this.APP_URL + '/post/new', this.postObject)
    .subscribe(
      response => console.log('success' , response),
      error => console.log('error', error)
    );
    this.router.navigateByUrl('/feed');

}
}
