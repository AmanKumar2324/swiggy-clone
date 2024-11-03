import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRestaurantsComponent } from './explore-restaurants.component';

describe('ExploreRestaurantsComponent', () => {
  let component: ExploreRestaurantsComponent;
  let fixture: ComponentFixture<ExploreRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
