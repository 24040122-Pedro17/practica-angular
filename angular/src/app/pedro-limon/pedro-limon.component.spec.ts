import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedroLimon } from './pedro-limon.component';

describe('PedroLimon', () => {
  let component: PedroLimon;
  let fixture: ComponentFixture<PedroLimon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedroLimon],
    }).compileComponents();

    fixture = TestBed.createComponent(PedroLimon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
