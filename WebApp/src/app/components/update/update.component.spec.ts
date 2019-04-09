import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UpdateComponent } from './update.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { CRUDService } from 'src/app/services/crud.service';
import { TestingCRUDService } from 'src/app/testings/testing-crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICreate } from '../create/create.interface';
import { FormGroup, FormControl } from '@angular/forms';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let crudService: CRUDService;
  let testingId = 2;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule.forModule({
      providers: [
        { provide: CRUDService, useClass: TestingCRUDService }
      ]
    })).compileComponents();
  }));

  beforeEach(() => {
    crudService = TestBed.get(CRUDService);
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.snapshot.params.id = testingId;
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update FormGroup', () => {
    const fakeForm = new FormGroup({
      firstname: new FormControl('Firstname 2'),
      lastname: new FormControl('Lastname 2'),
      old: new FormControl(20),
    });
    expect(component.form.value).toEqual(fakeForm.value);
  });

  it('should create onSubmit method', done => {
    const value: ICreate.IForm = {
      firstname: 'Testing Firstname',
      lastname: 'Testing Lastname',
      old: 100
    };
    component.form.setValue(value);
    fixture.ngZone.run(() => {
      component.onSubmit();
      expect(component.errorMessage).toEqual('');
      crudService.Items().subscribe(result => {
        const model = result.find(m => m.Id == testingId);
        expect(model.Firstname).toEqual(value.firstname);
        expect(model.Lastname).toEqual(value.lastname);
        expect(model.Old).toEqual(value.old);
        done();
      });
    });
  });
});
