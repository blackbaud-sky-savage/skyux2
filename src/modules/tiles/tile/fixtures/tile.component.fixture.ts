import { Component } from '@angular/core';

@Component({
  selector: 'sky-test-cmp',
  template: require('./tile.component.fixture.html')
})
export class TileTestComponent {
  public tileIsCollapsed = false;

  public tileSettingsClick() {

  }
}
