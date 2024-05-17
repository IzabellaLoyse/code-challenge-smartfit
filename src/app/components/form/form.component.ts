import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ILocation } from '../../interfaces/units.interface';
import { SmartUnitsService } from '../../services/smart-units.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public results: ILocation[] = [];
  public filteredResults: ILocation[] = [];
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private smartUnitsService: SmartUnitsService
  ) {}

  public ngOnInit(): void {
    this.smartUnitsService.getUnits().subscribe((data) => {
      this.results = data.locations || [];
      this.filteredResults = data.locations || [];
    });

    this.form = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
  }

  public onSubmit(): void {
    const showClosedValue = this.form.get('showClosed')?.value;

    if (!showClosedValue) {
      this.filteredResults = this.results.filter(
        (location) => location.opened === true
      );
    } else {
      this.filteredResults = this.results;
    }
  }

  public onClear(): void {
    this.form.reset();
  }
}
