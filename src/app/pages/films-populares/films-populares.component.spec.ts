import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPopularesComponent } from './films-populares.component';

describe('FilmsPopularesComponent', () => {
  let component: FilmsPopularesComponent;
  let fixture: ComponentFixture<FilmsPopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsPopularesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
