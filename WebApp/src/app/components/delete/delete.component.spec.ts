import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { ActivatedRoute } from '@angular/router';
import { CRUDService } from 'src/app/services/crud.service';
import { of } from 'rxjs';
import { TestingCRUDService } from 'src/app/testings/testing-crud.service';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let activatedRoute: ActivatedRoute;
  let crudService: CRUDService;
  let testingId = 2;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule.forModule({
      declarations: [DeleteComponent],
      providers: [
        { provide: CRUDService, useClass: TestingCRUDService }
      ]
    })).compileComponents();
  }));

  beforeEach(() => {
    crudService = TestBed.get(CRUDService);
    activatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.snapshot.params.id = testingId;
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should header title equal "DELETE"', () => {
    const element = fixture.debugElement.nativeElement as HTMLElement;
    const header = element.querySelector('.card-header span');
    expect(header.textContent).toContain('DELETE');
  });

  it('should check route params', (done) => {
    expect(component.id).toEqual(testingId);
    crudService.ItemById(testingId).subscribe(item => {
      expect(component.item).toEqual(item);
      done();
    });
  });

  it('shold check onDelete method', (done) => {
    component.onDelete();
    crudService.Items().subscribe(items => {
      expect(items.length).toBe(2);
      done();
    });
  });
});
