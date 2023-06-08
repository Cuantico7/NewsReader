import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewDetailPage } from './new-detail.page';

describe('NewDetailPage', () => {
  let component: NewDetailPage;
  let fixture: ComponentFixture<NewDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
