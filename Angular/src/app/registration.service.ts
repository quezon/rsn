import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

_url = 'http://ec2-18-188-105-4.us-east-2.compute.amazonaws.com:8080/rsn'

  constructor(private _http: HttpClient) { }

//CdY5mgnaJMpU
register(userData){
 return this._http.post<any>(this._url + '/user/new', userData);
}

login(loginForm){
  let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
 };
  return this._http.post<any>(this._url + '/user/in',JSON.stringify(loginForm),options);
}

getUserProfile(username){
  return this._http.get<any>(this._url + '/user/'+ username);
}

editProfile(userData){
  return this._http.post<any>(this._url + '/user/edit', userData);
 }

 newPost(postObject){
  return this._http.post<any>(this._url + '/post/new', postObject);
 }

 getUserPosts(username){
  return this._http.get<any>(this._url + '/post/'+ username);
 }

 getAllPosts(){
  return this._http.get<any>(this._url + '/post/all');
 }

}