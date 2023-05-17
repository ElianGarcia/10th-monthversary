import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsComponent } from './two-columns.component';

describe('TwoColumnsComponent', () => {
  let component: TwoColumnsComponent;
  let fixture: ComponentFixture<TwoColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
