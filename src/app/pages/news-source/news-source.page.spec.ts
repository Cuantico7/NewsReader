import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsSourcePage } from './news-source.page';

describe('NewsSourcePage', () => {
  let component: NewsSourcePage;
  let fixture: ComponentFixture<NewsSourcePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsSourcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
