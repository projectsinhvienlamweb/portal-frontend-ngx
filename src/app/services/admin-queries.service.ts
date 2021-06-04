import { Injectable } from '@angular/core';
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
export class AdminQueriesService extends AmplifyService {
  apiName = 'AdminQueries';
  nextToken;
  limit = 10;


  async getUsers() {
    const response = await this.fetch('get', '/listUsers', {
      queryStringParameters: {
        'limit': this.limit,
        'token': this.nextToken,
      },
    });
    const users = response.Users.map(this.flat);
    await Promise.all(users.map(this.showGroups.bind(this)));
    return users;
  }

  async showGroups(user: User) {
    const response = await this.fetch('get', '/listGroupsForUser', {
      queryStringParameters: { username: user.Username },
    });
    user.group = response.Groups.map(g => g.GroupName).join(', ');
    return user;
  }

  flat(user: User) {
    user.Attributes.forEach(attribute => {
      user[attribute.Name] = attribute.Value;
    });
    return user;
  }
}
