import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { promise } from 'protractor';

let baseUrl = "http://localhost:3001/api/v1/";

@Injectable()
export class UserProfileService {

  constructor(private http: Http) { }

  createUser(newUser) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(baseUrl + 'users', newUser, { headers: headers })
        .subscribe(res => {
          console.log('res at user profile service ' + res.json());
          resolve(res.json())
        }, (err) => {
          reject(err);
        });
    });
  }
}