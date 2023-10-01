import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingPanelComponent } from './posting-panel.component';

describe('PostingPanelComponent', () => {
  let component: PostingPanelComponent;
  let fixture: ComponentFixture<PostingPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostingPanelComponent]
    });
    fixture = TestBed.createComponent(PostingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
