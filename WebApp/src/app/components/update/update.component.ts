import { Component, OnInit } from '@angular/core';
import { ICreate } from '../create/create.interface';
import { finalize } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CRUDService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;
  errorMessage: string = '';
  loading: boolean;
  id: number;

  constructor(
    private crudService: CRUDService,
    private builder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.initializeCreateForm();
  }

  ngOnInit() {
    this.crudService.ItemById(this.id).subscribe(result => {
      this.form.get('firstname').setValue(result.Firstname);
      this.form.get('lastname').setValue(result.Lastname);
      this.form.get('old').setValue(result.Old);
    }, () => this.router.navigate(['/read']));
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.form.invalid) return this.errorMessage = 'The form is invalid';
    const model = ICreate.Model.createModel(this.form.value);
    this.loading = true;
    this.crudService.Update(this.id, model)
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
