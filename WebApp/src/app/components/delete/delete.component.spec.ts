import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from 'src/app/services/crud.service';
import { TestingCRUDService } from 'src/app/testings/testing-crudservice';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let activateRoute: ActivatedRoute;
  let router: Router;
  let crudService: CRUDService;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule({
      declarations: [DeleteComponent],
      providers: [{ provide: CRUDService, useClass: TestingCRUDService }]
    }))
      .compileComponents();
  }));

  beforeEach(() => {
    crudService = TestBed.get(CRUDService);
    router = TestBed.get(Router);
    activateRoute = TestBed.get(ActivatedRoute);
    activateRoute.snapshot.params = { id: 2 };
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get item service must be valid', fakeAsync(() => {
    router.navigate(['/update/2']);
    tick(500);
    const element = fixture.debugElement.nativeElement as HTMLElement;
    const idElement = element.querySelector('#idCode');
    expect(component.id).not.toBeNaN();
    expect(component.item.Firstname).toEqual("firstname 2");
    expect(idElement.textContent).toContain("2");
  }));

  it('should create onDelete method and must be valid', (done) => {
    component.onDelete();
    crudService.Items().subscribe(result => {
      expect(result.length).toBe(2);
      done();
    });
  });
});
