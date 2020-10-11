import { Component, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';
  @Input() data: string;
  @Output() params: string;

 // @HostListener(update) update(){}
}
