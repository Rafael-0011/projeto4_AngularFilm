import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmPopularComponent } from './list-film-popular.component';

describe('ListFilmPopularComponent', () => {
  let component: ListFilmPopularComponent;
  let fixture: ComponentFixture<ListFilmPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilmPopularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilmPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
