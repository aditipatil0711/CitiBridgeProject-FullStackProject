import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistStatusComponent } from './watchlist-status.component';

describe('WatchlistStatusComponent', () => {
  let component: WatchlistStatusComponent;
  let fixture: ComponentFixture<WatchlistStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
