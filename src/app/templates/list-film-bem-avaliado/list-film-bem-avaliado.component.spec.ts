import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmBemAvaliadoComponent } from './list-film-bem-avaliado.component';

describe('ListFilmBemAvaliadoComponent', () => {
  let component: ListFilmBemAvaliadoComponent;
  let fixture: ComponentFixture<ListFilmBemAvaliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilmBemAvaliadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilmBemAvaliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
