import { Component } from '@angular/core';
import {GitsearchComponent} from './gitsearch/gitsearch.component';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[ProjectService],
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map2';
}
