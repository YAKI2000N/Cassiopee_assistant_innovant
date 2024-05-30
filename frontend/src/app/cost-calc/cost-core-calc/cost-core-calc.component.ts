import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsDirective } from 'src/app/shared/directives/custom-validators.directive';

@Component({
  selector: 'app-cost-core-calc',
  templateUrl: './cost-core-calc.component.html',
  styleUrls: ['./cost-core-calc.component.scss']
})
export class CostCoreCalcComponent implements AfterViewInit {
  @Input() payPerYear = 12;
  @Input() simpleMode = false;
  @Input() boxShadow = true;
  @Output() formValue = new EventEmitter<{
    monthlyWage: number;
    monthlyRent: number;
    incomeTaxes: number;
    insurance: number;
  }>();
  
  @Output() scheduleChanged = new EventEmitter<boolean>();

  public CostForm: UntypedFormGroup;
  public monthlyPayment = '0';

  constructor(private formBuilder: UntypedFormBuilder, private customValidator: CustomValidatorsDirective) {
    this.CostForm = this.formBuilder.group({
      monthlyWage: ['1000,000', [Validators.required, Validators.min(1)]],
      monthlyRent:['200,000', [Validators.required, Validators.min(1)]],
      lifeCost: ['100,000', [Validators.required, Validators.min(1)]],
      incomeTaxes: [(this.simpleMode ? '0' : '150')],
      insurance: [(this.simpleMode ? '0' : '150')],
    }, { validators: this.customValidator.isGreaterValidator('monthlyWage', 'monthlyRent', 'lifeCost') });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getMonthlyCalculate();
    }, 1000);
  }

  public formatValue(event: Event, property: string) {
    const value = (event.target as HTMLTextAreaElement).value;
    if (!value) {
      return;
    }
    let myString = value.toString().replace(/\D/g, '');
    myString = myString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.CostForm.patchValue({ [property]: myString });
    this.getMonthlyCalculate();
  }

  public getMonthlyCalculate() {
    if (!this.CostForm.valid) {
      return;
    }
    const {monthlyWage , monthlyRent, incomeTaxes, insurance } = this.CostForm.value;
    const numWage = Number(monthlyWage.toString().replace(/\,/g, ''));
    const numRent = Number(monthlyRent.toString().replace(/\,/g, ''));
    const r = this.monthlyPayCalculate(
      numWage, numRent, incomeTaxes, insurance
    );
    if (!r) {
      return;
    }
  }

  private monthlyPayCalculate(
    numWage: number,
    numRent: number,
    incomeTaxes: number,
    insurance: number,
  ) {
    const revenuNet = numWage - (incomeTaxes + insurance)
    const monthlyPayment = incomeTaxes + insurance + numRent

    return {
      monthlyPayment,
    };
  }
}
