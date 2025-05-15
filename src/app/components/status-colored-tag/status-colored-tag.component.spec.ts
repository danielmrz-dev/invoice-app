import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusColoredTagComponent } from './status-colored-tag.component';

describe('StatusColoredTagComponent', () => {
  let component: StatusColoredTagComponent;
  let fixture: ComponentFixture<StatusColoredTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusColoredTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusColoredTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
