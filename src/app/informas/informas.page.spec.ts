import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformasPage } from './informas.page';

describe('InformasPage', () => {
  let component: InformasPage;
  let fixture: ComponentFixture<InformasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
