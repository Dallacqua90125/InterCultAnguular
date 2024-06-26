import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalyComponent } from './italy.component';

describe('ItalyComponent', () => {
  let component: ItalyComponent;
  let fixture: ComponentFixture<ItalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItalyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
