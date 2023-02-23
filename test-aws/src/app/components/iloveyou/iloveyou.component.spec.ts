import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IloveyouComponent } from './iloveyou.component';

describe('IloveyouComponent', () => {
  let component: IloveyouComponent;
  let fixture: ComponentFixture<IloveyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IloveyouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IloveyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
