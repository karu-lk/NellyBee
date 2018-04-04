import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

let baseUrl = "http://localhost:3001/api/v1/";

@Injectable()
export class UserProfileService {

  constructor(private http: Http) { }

  createUser(newUser): any {
    let headers = new Headers();
    this.http.post(baseUrl + 'users', newUser, { headers: headers })
      .subscribe(res => {
        console.log(res.json());
        return res;
      });
  }
}