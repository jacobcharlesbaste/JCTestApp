import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Person {
  id: number;
  name: string;
  email: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})

export class PeopleDataService {
  public people: Person[] = [];

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get<Person[]>('/people');
  }
}
