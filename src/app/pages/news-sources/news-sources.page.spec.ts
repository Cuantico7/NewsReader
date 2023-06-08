import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsSourcesPage } from './news-sources.page';

describe('NewsSourcesPage', () => {
  let component: NewsSourcesPage;
  let fixture: ComponentFixture<NewsSourcesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsSourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
