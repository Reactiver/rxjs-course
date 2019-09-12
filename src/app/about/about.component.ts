import { Component, OnInit } from '@angular/core';
import { of, concat, interval } from 'rxjs';
import { debounce, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const source1$ = interval(1000).pipe(take(5));
    const source2$ = of(4, 5, 6);
    const source3$ = of(7, 8, 9);
    const result$ = concat(source2$, source1$, source3$)

    result$.subscribe(console.log)
  }
}
