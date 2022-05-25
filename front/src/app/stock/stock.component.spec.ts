import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetsModule } from '../widgets/widgets.module';

import { StockComponent } from './stock.component';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetsModule],
      declarations: [StockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
