import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { UserProfileService } from '../services/userProfile/user-profile.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public newUser = { userId: '', userIdToken: '', userEmail: '', userPic: '', userFullName: '', authProvider: '', authToken: '', lastModifiedTime: moment() };

  constructor(private socialAuthService: AuthService, private userProfileService: UserProfileService, private router: Router) { }

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
        this.newUser.userEmail = userProfile.email;
        this.newUser.userId = userProfile.id;
        this.newUser.userIdToken = userProfile.idToken;
        this.newUser.userPic = userProfile.image;
        this.newUser.userFullName = userProfile.name;
        this.newUser.authProvider = userProfile.provider;
        this.newUser.authToken = userProfile.token;
        this.newUser.lastModifiedTime = moment();
        // Now sign-in with userData

        this.userProfileService.createUser(this.newUser).then(result => {
          console.log(`Successfully created a pending user ${JSON.stringify(result)}`);
          if (result.data.userStatus=='pending') {
            this.router.navigate(['/user-verification']);
          }
          else if (result.data.userStatus=='verified') {
            this.router.navigate(['/home']);
          }
        });
      }
    )
  }

  localLogin() {
    this.router.navigate(['/coming-soon']);
  }






}

//   validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   }

//   emailValidate() {
//     if (this.validateEmail(this.userEmail)) {
//       console.log('Valid email address. Authentication is progressing...');
//     } else { }
//   }
// }