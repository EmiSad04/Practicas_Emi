import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponet } from './contacto-componet';

describe('ContactoComponet', () => {
  let component: ContactoComponet;
  let fixture: ComponentFixture<ContactoComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
