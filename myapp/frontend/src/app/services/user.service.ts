import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from "src/app/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  register_url ="";
  all_users_url="";
  delete_url ="";

  constructor(private http: HttpClient) { }

  register_user(user: User)
  {
    return this.http.post(this.register_url, user)
  }

  delete(id: number) {
    return this.http.delete(this.delete_url + id);
    }
    getAll() {
      return this.http.get<User[]>(this.all_users_url);
  }
}
