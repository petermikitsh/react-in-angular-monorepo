import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import ReactApp from '@demo/react-app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container') container;

  ngAfterViewInit() {
    ReactApp(this.container.nativeElement);
  }
}
