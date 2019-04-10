import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComponent } from './read.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { CRUDService } from 'src/app/services/crud.service';
import { of, Observable } from 'rxjs';
import { ICRUD } from 'src/app/abstracts/ICRUD.interface';
import { TestingCRUDService } from 'src/app/testings/testing-crudservice';

describe('ReadComponent', () => {
  let component: ReadComponent;
  let fixture: ComponentFixture<ReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule({
      declarations: [ReadComponent],
      providers: [
        { provide: CRUDService, useClass: TestingCRUDService }
      ]
    })).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create "Item" and check member of "Items"', () => {
    expect(component.items).toBeTruthy();
    expect(component.items.length).toBe(3);
  });
});
