import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent {
  user:any;
  Repos:any;
  username:any;

  constructor(private projectService:ProjectService) {
    this.projectService.getUser().subscribe(user=>{
      this.user=user;
    
    })
   }
   search()
{
  this.projectService.updateusername(this.username)
  this.projectService.getRepos().subscribe(Repos=>{
    this.Repos=Repos;
  
  })
  
}
  
  ngOnInit(): void {
  }

}
