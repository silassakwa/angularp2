import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import 'rxjs';
@Injectable()
export class ProjectService {
private userName='silas';

  constructor(private http:HttpClient) {
    console.log("This service is running hhahahaha");
   }
  getUser()
  {
    return this.http.get("https://api.github.com/users/"+this.userName)
  }
}
