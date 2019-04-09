import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CRUDService } from 'src/app/services/crud.service';
import { ICreate } from './create.interface';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';
  loading: boolean;

  constructor(
    private crudService: CRUDService,
    private builder: FormBuilder,
    private router: Router
  ) {
    this.initializeCreateForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.form.invalid) return this.errorMessage = 'The form is invalid';
    const model = ICreate.Model.createModel(this.form.value);
    this.loading = true;
    this.crudService.Create(model)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        result => this.router.navigate(['/read']),
        error => this.errorMessage = error.message
      );
  }

  private initializeCreateForm() {
    this.form = this.builder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      old: [0, Validators.pattern(/^[0-9.]+$/)]
    });
  }
}
