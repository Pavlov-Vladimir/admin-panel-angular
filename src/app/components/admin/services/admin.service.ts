import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getPersonalList() {
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users?_start=0&_limit=5'
    );
  }

  getPerson(id: number) {
    return this.httpClient.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
