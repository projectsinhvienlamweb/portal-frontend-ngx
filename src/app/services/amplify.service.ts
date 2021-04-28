import { Injectable } from '@angular/core';
import API from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class AmplifyService {
  apiName: String;

  constructor(private toast: NbToastrService) { }

  async getHeaders() {
    return {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
    };
  }

  async fetch(method: 'get' | 'post' | 'put' | 'delete', path: string, init) {
    try {
      const response = await API[method](this.apiName, path, {
        headers: await this.getHeaders(),
        ...init,
      });
      return response;
    } catch (error) {
      const message = error?.response?.data?.message ?? error;
      this.toast.danger(message, 'Error');
    }
  }
}
