import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannersDosFilmesComponent } from './banners-dos-filmes.component';

describe('BannersDosFilmesComponent', () => {
  let component: BannersDosFilmesComponent;
  let fixture: ComponentFixture<BannersDosFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannersDosFilmesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannersDosFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
