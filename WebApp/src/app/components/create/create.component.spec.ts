import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateComponent } from './create.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { FormGroup, FormControl } from '@angular/forms';
import { ICreate } from './create.interface';
import { CRUDService } from 'src/app/services/crud.service';
import { TestingCRUDService } from 'src/app/testings/testing-crud.service';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule.forModule({
      declarations: [
        CreateComponent
      ]
    })).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should header title equal "CREATE"', () => {
    const element = fixture.debugElement.nativeElement as HTMLElement;
    const header = element.querySelector('.card-header span');
    expect(header.textContent).toContain('CREATE');
  });

  it('should create FormGroup', () => {
    const fakeForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      old: new FormControl(0)
    });
    expect(component.form.value).toEqual(fakeForm.value);
  });

  it('should create onSubmit method', () => {
    const vlaue: ICreate.IForm = {
      firstname: 'Test firstname',
      lastname: 'Test lastname',
      old: 1
    };
    component.form.setValue(vlaue);
    component.onSubmit();
    expect(component.errorMessage).toEqual('');
    expect(component.loading).toBe(true);
  });
});
