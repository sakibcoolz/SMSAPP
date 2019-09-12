import { Component, ChangeDetectionStrategy } from '@angular/core';
import { delay, withLatestFrom, map } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'SMSAPP';
  
  delayedProgress$ = this.loader.progress$.pipe(
    delay(2000),
    withLatestFrom(this.loader.progress$),
    map(v => v[1]),
  );

  constructor(
    public loader: LoadingBarService,
    public _router: Router
  ) { 

  }
  
}
