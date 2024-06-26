import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamesComponent } from './edit-games.component';

describe('EditGamesComponent', () => {
  let component: EditGamesComponent;
  let fixture: ComponentFixture<EditGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
