import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.css']
})
export class UserVerificationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  verifyNewUser(){
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }
}