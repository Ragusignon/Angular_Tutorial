import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  title: String = 'Shopping APP';

  user_list: User[] = [{
      user_id : 1,
      user_name : 'Arun',
      gender : 'M',
      phone_number : '123456789',
      address : 'INDIA',
      password : 'arun',
      blood_group : 'AB-',
      date_of_birth : new Date(),
      date_Of_registration : new Date()
    },
    {
      user_id : 2,
      user_name : 'Akash',
      gender : 'M',
      phone_number : '123456789',
      address : 'INDIA',
      password : 'akash',
      blood_group : 'AB-',
      date_of_birth : new Date(),
      date_Of_registration : new Date()
    },
    {
      user_id : 3,
      user_name : 'Siva',
      gender : 'M',
      phone_number : '123456789',
      address : 'INDIA',
      password : 'siva',
      blood_group : 'AB-',
      date_of_birth : new Date(),
      date_Of_registration : new Date()
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
