import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@st-environment/environment';

@Injectable()
export class ProfileService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getOne() {
    return this.http.get(this.baseUrl);
  }

  getList() {

  }

  updateOne(profile) {
    return this.http.put(this.baseUrl + '/api/profile/99', profile);
  }
}
