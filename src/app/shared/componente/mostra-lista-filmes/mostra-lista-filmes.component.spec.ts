import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraListaFilmesComponent } from './mostra-lista-filmes.component';

describe('MostraListaFilmesComponent', () => {
  let component: MostraListaFilmesComponent;
  let fixture: ComponentFixture<MostraListaFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostraListaFilmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraListaFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
