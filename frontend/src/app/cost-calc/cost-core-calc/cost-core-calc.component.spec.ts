import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomValidatorsDirective } from 'src/app/shared/directives/custom-validators.directive';

import { CostCoreCalcComponent } from './cost-core-calc.component';

describe('CostCoreCalcComponent', () => {
  let component: CostCoreCalcComponent;
  let fixture: ComponentFixture<CostCoreCalcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCoreCalcComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule],
      providers: [CustomValidatorsDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(CostCoreCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
