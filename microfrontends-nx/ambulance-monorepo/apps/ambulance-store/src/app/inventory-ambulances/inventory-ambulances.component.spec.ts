import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryAmbulancesComponent } from './inventory-ambulances.component';

describe('InventoryAmbulancesComponent', () => {
  let component: InventoryAmbulancesComponent;
  let fixture: ComponentFixture<InventoryAmbulancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAmbulancesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryAmbulancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
