import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComponent } from './read.component';
import { TestingModule } from 'src/app/testings/testing.module';
import { CRUDService } from 'src/app/services/crud.service';
import { TestingCRUDService } from 'src/app/testings/testing-crud.service';

describe('ReadComponent', () => {
  let component: ReadComponent;
  let fixture: ComponentFixture<ReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule.forModule({
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

  it('should have Items property', () => {
    expect(component.items.length).toEqual(3);
  });
});
