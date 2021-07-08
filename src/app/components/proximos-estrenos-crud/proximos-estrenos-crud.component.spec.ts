import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosEstrenosCrudComponent } from './proximos-estrenos-crud.component';

describe('ProximosEstrenosCrudComponent', () => {
  let component: ProximosEstrenosCrudComponent;
  let fixture: ComponentFixture<ProximosEstrenosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximosEstrenosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosEstrenosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
