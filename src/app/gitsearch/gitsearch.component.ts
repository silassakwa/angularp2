import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent {
  user:any;

  constructor(private projectService:ProjectService) {
    this.projectService.getUser().subscribe(user=>{
      this.user=user;
      console.log(this.user);
    })
   }
  
  ngOnInit(): void {
  }

}
