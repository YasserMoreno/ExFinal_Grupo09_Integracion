import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMeseroComponent } from './agregar-mesero.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('AgregarMeseroComponent', () => {
  let component: AgregarMeseroComponent;
  let fixture: ComponentFixture<AgregarMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarMeseroComponent, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
