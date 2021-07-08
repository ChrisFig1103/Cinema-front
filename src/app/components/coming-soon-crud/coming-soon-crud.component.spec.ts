import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonCrudComponent } from './coming-soon-crud.component';

describe('ComingSoonCrudComponent', () => {
  let component: ComingSoonCrudComponent;
  let fixture: ComponentFixture<ComingSoonCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
