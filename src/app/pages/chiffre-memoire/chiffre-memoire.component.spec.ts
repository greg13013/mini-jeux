import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffreMemoireComponent } from './chiffre-memoire.component';

describe('ChiffreMemoireComponent', () => {
  let component: ChiffreMemoireComponent;
  let fixture: ComponentFixture<ChiffreMemoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiffreMemoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffreMemoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
