import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryRestrauntComponent } from './every-restraunt.component';

describe('EveryRestrauntComponent', () => {
  let component: EveryRestrauntComponent;
  let fixture: ComponentFixture<EveryRestrauntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EveryRestrauntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EveryRestrauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
