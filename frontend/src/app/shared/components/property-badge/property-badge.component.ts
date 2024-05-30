import { Component, Input, OnInit } from '@angular/core';
import { PropertyType } from '../../enums/property';

@Component({
  selector: 'app-property-badge',
  templateUrl: './property-badge.component.html',
  styleUrls: ['./property-badge.component.scss'],
})
export class PropertyBadgeComponent implements OnInit {

  @Input() type = 'residential';
  constructor() { }

  ngOnInit() { }

  typeColor() {
    switch (this.type) {
      case PropertyType.residential:
        return 'danger';
      case PropertyType.commercial:
        return 'tertiary';
      case PropertyType.industrial:
        return 'warning';
      case PropertyType.land:
        return 'success';
      default:
        break;
    }
  }

  typeLabel() {
    switch (this.type) {
      case PropertyType.residential:
        return 'Residential service';
      case PropertyType.commercial:
        return 'Commercial service';
      case PropertyType.industrial:
        return 'Industrial service';
      case PropertyType.land:
        return 'Land service';
      case PropertyType.Educational:
        return 'Educational service';
      case PropertyType.Gouvernemental:
        return 'Gouvernemental service';
      default:
        break;
    }
  }
}
