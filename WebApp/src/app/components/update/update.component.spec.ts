import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponent } from './update.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { ActivatedRoute } from '@angular/router';
import { TestingCRUDService } from 'src/app/testings/testing-crudservice';
import { CRUDService } from 'src/app/services/crud.service';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;
  let activateRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule({
      declarations: [UpdateComponent],
      providers: [
        { provide: CRUDService, useClass: TestingCRUDService }
      ]
    })).compileComponents();
  }));

  beforeEach(() => {
    activateRoute = TestBed.get(ActivatedRoute);
    activateRoute.snapshot.params = { id: 3 };
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get item service must be valid', () => {
    expect(component.id).not.toBeNaN();
  });
});
