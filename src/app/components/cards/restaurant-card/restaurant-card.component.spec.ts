import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantCardComponent } from './restaurant-card.component';

describe('RestaurantCardComponent', () => {
  let component: RestaurantCardComponent;
  let fixture: ComponentFixture<RestaurantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantCardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCardComponent);
    component = fixture.componentInstance;
    component.imageUrl = 'https://example.com/image.jpg';
    component.offerText = '20% Off on your first order';
    component.restaurantName = 'Sample Restaurant';
    component.ratings = 4.5;
    component.dishes = ['Pizza', 'Burger', 'Pasta'];
    component.address = '123 Sample St, City';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
