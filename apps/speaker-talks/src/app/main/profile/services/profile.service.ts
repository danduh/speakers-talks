import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@st-environment/environment';
import { AuthDetailsInterface, User } from '@shared-interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getOne(id) {
    return this.http.get(this.baseUrl + '/api/profiles/' + id);
  }

  getList() {

  }

  create(profile: AuthDetailsInterface): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/api/profiles', profile);
  }

  updateOne(profile) {
    return this.http.put(this.baseUrl + '/api/profiles/' + profile.id, profile);
  }
}
