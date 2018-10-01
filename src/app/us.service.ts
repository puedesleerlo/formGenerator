import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsService {
  memberUrl = ""
  constructor(private http: HttpClient) { }
  getMembers() {
    return this.http.get(this.memberUrl);
  }
}
