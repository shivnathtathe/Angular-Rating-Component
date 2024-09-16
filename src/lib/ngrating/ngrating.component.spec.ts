import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgratingComponent } from './ngrating.component';

describe('NgratingComponent', () => {
  let component: NgratingComponent;
  let fixture: ComponentFixture<NgratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgratingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
