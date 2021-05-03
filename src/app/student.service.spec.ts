import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { USER } from './dom-data/user';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new StudentService(httpClientSpy as any);
  });

  it('should return expected users (HttpClient called once)', (done: DoneFn) => {
    const user: USER[] = [
      {
        id: 1,
        name: 'Test 1',
        email: 'test1@gmail.com',
        avatar: '',
        dob: '19-01-1944',
        phone_number: 548487616,
        role: 'STUDENT',
      }, {
        id: 2,
        name: 'Test 2',
        email: 'test2@gmail.com',
        avatar: '',
        dob: '13-01-1931',
        phone_number: 548487616,
        role: 'TEACHER',
      },
    ];

    httpClientSpy.get.and.returnValue(of(user));

    service.getUsers().subscribe(res => {
      expect(res).toBe(user, 'expected Users');
      done();
    }, err => {
      fail();
      throw new Error;
    });

    expect(httpClientSpy.get.calls.count()).toBe(1, 'once call');
  });

  it('should return expected user posted ', (done: DoneFn) => {
    const addUser: USER = {
      id: 100,
      name: 'TEST ADD',
      dob: '19-12-1966',
      role: 'TEACHER',
      avatar: '',
      email: 'abc@gmail.com',
      phone_number: 113,
    };
    httpClientSpy.post.and.returnValue(of(addUser));

    service.postUser(addUser).subscribe(res => {
      expect(res).toBe(addUser, 'user posted');
      done();
    });

    expect(httpClientSpy.post.calls.count()).toBe(1, 'once call');
  });

  it('should return expected user edited', (done: DoneFn) => {
    const currentUser: USER = {
      id: 100,
      name: 'TEST ADD',
      dob: '19-12-1966',
      role: 'TEACHER',
      avatar: '',
      email: 'abc@gmail.com',
      phone_number: 113,
    };
    const editedUser: USER = {
      id: 100,
      name: 'TEST EDITED',
      dob: '19-12-1966',
      role: 'TEACHER',
      avatar: '',
      email: 'abc@gmail.com',
      phone_number: 113,
    };

    httpClientSpy.put.and.returnValue(of(currentUser));

    service.editUser(currentUser.id, editedUser).subscribe(res => {
      expect(res.id).toBe(editedUser.id, 'user edited');
      done();
    });

    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });


});
