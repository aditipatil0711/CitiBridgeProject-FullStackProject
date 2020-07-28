import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSectorMenuComponent } from './stock-sector-menu.component';

describe('StockSectorMenuComponent', () => {
  let component: StockSectorMenuComponent;
  let fixture: ComponentFixture<StockSectorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSectorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSectorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
