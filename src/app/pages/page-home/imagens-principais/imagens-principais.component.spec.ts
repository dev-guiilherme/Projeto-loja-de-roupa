import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensPrincipaisComponent } from './imagens-principais.component';

describe('ImagensPrincipaisComponent', () => {
  let component: ImagensPrincipaisComponent;
  let fixture: ComponentFixture<ImagensPrincipaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagensPrincipaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagensPrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
