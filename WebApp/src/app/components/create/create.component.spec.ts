import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { FormGroup, FormControl } from '@angular/forms';
import { ICreate } from './create.interface';
import { CRUDService } from 'src/app/services/crud.service';
import { TestingCRUDService } from 'src/app/testings/testing-crudservice';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let crudService: CRUDService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule({
      declarations: [CreateComponent],
      providers: [
        { provide: CRUDService, useClass: TestingCRUDService }
      ]
    }))
      .compileComponents();
  }));

  beforeEach(() => {
    crudService = TestBed.get(CRUDService);
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create onSubmit method', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('should create FormGroup', () => {
    const form = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      old: new FormControl(0)
    });
    expect(component.form.value).toEqual(form.value);
  });

  it('should onSubmit method must valid', (done) => {
    fixture.ngZone.run(() => {
      const value: ICreate.IForm = {
        firstname: 'Add Firstname',
        lastname: 'Add Lastname',
        old: 4
      };
      component.form.setValue(value);
      component.onSubmit();
      expect(component.errorMessage).toEqual('');

      crudService.Items().subscribe(reslult => {
        expect(reslult.length).toBe(4);
        done();
        fixture.detectChanges();
      });
    });
  });
});
