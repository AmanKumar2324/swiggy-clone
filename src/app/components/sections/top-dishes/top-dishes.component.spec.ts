import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDishesComponent } from './top-dishes.component';

describe('TopDishesComponent', () => {
  let component: TopDishesComponent;
  let fixture: ComponentFixture<TopDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopDishesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
