import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardCrudComponent } from './billboard-crud.component';

describe('BillboardCrudComponent', () => {
  let component: BillboardCrudComponent;
  let fixture: ComponentFixture<BillboardCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillboardCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
