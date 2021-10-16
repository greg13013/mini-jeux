import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilleMemoireComponent } from './grille-memoire.component';

describe('GrilleMemoireComponent', () => {
  let component: GrilleMemoireComponent;
  let fixture: ComponentFixture<GrilleMemoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrilleMemoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrilleMemoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
