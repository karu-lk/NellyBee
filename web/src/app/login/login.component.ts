import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userId: string;
  public userIdToken: string;
  public userEmail: string;
  public userPic: string;
  public userFullName: string;
  public authProvider: string;
  public authToken: string;

  constructor(private socialAuthService: AuthService) { }

  ngOnInit() { }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userProfile) => {
        console.log(socialPlatform + " sign in data : ", userProfile);
        this.userEmail = userProfile.email;
        this.userId = userProfile.id;
        this.userIdToken = userProfile.idToken;
        this.userPic = userProfile.image;
        this.userFullName = userProfile.name;
        this.authProvider = userProfile.provider;
        this.authToken = userProfile.token;
        // Now sign-in with userData
      }
    );
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  emailValidate() {
    if (this.validateEmail(this.userEmail)) {
      console.log('Valid email address. Authentication is progressing...');
    } else { }
  }
}