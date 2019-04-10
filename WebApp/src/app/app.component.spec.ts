import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestingModule } from './testings/testing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(TestingModule({
      declarations: [
        AppComponent
      ]
    })).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
