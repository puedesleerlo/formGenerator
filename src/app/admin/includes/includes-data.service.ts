import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Include {
  title: string,
  content: string
}
@Injectable({
  providedIn: 'root'
})
export class IncludesDataService {
  includesUrl = "process.env.includesUrl"
  constructor(private http: HttpClient) { }

  getIncludes() {
    this.http.get(this.includesUrl)
  }
  newInclude(inc: Include) {
    this.http.post(this.includesUrl, inc)
  }
  updateInclude(inc: Include) {
    this.http.put(this.includesUrl, inc)
  }
  deleteInclude(inc: Include) {
    this.http.delete(this.includesUrl)
  }
}
