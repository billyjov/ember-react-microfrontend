import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-app';

  constructor(private router: Router) {}

  ngOnInit() {
    fromEvent(window, 'ember-app:landscapes').subscribe((event) => {
      console.log('event was sent from sub app:::: ', event);
      // window.history.pushState(null, '', 'landscapes');
      // this.router.transitionTo('landscapes');
      // this.transitionToRoute('landscapes');
      this.router.navigateByUrl('landscapes');
    });
  }
}
