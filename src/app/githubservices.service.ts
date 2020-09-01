import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GithubService {
  private userName='charles';

  constructor(private http:HttpClient) {
    console.log("Github service started......");
   }
   getUser()
   {
      return this.http.get("https://api.github.com/users/"+this.userName)
      //.pipe(map(res=>res.jason()))
   }
  }
