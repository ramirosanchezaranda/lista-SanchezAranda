import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudetsComponent } from './list-studets.component';

describe('ListStudetsComponent', () => {
  let component: ListStudetsComponent;
  let fixture: ComponentFixture<ListStudetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});