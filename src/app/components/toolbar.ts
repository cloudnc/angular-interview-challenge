import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bc-toolbar',
  template: `
    <md-toolbar color="primary">
      <button md-icon-button (click)="openMenu.emit()">
        <md-icon>menu</md-icon>
      </button>
        <button md-button [routerLink]="''">
            <ng-content></ng-content>
        </button>
      <span class="spacer"></span>
        <span>Logged in as ?</span>
      <button md-button [routerLink]="'login'">
          <md-icon>lock_open</md-icon>
          Login
      </button>
    </md-toolbar>
  `,
  styles: [`
  .spacer {
    flex: 1 1 auto;
  }
  `]
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
