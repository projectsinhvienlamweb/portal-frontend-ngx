import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { UserService } from '../@core/mock/users.service';
import { AdminQueriesService } from './admin-queries.service';
import { AmplifyService } from './amplify.service';

interface Attribute {
  Name: string;
  Value: string;
}

interface User {
  Username: string;
  Attributes: Array<Attribute>;
  [x: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class CustomAdminQueriesService extends AdminQueriesService {

  constructor(private mockUserService: UserService, private toastr: NbToastrService) {
    super(toastr);
  }

  async getUsers(): Promise<User[]> {
    const users = await this.mockUserService.getUsers().toPromise();
    return Object.keys(users).map<User>(key => ({
      Username: key,
      Fullname: users[key].name,
      UserCreateDate: new Date(),
      Attributes: [],
    }));
  }
}
