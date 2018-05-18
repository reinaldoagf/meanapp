import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[]=[
    new User(1,'nombre1','apellido1','email1@email.com'),
    new User(2,'nombre2','apellido2','email2@email.com'),
    new User(3,'nombre3','apellido3','email3@email.com'),
  ];
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this._userService.getUsers().then(users=>this.users=users)
  }
}
