import { ContactInfo } from './model/contact.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'NewAngular';
  public contactInfo: ContactInfo;

  public onInfoChange(info: ContactInfo): void {
    this.contactInfo = info;
    console.log('data has been updated', info);
  }
}
