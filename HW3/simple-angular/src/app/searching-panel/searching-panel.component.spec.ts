import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingPanelComponent } from './searching-panel.component';

describe('SearchingPanelComponent', () => {
  let component: SearchingPanelComponent;
  let fixture: ComponentFixture<SearchingPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchingPanelComponent]
    });
    fixture = TestBed.createComponent(SearchingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
