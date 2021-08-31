import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopoeiasComponent } from './create-onomatopoeias.component';

describe('CreateOnomatopoeiasComponent', () => {
  let component: CreateOnomatopoeiasComponent;
  let fixture: ComponentFixture<CreateOnomatopoeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnomatopoeiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOnomatopoeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
