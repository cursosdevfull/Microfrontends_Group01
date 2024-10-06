import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UmesComponent } from './umes.component';

describe('UmesComponent', () => {
  let component: UmesComponent;
  let fixture: ComponentFixture<UmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
