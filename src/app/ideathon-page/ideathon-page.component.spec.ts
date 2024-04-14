import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeathonPageComponent } from './ideathon-page.component';

describe('IdeathonPageComponent', () => {
  let component: IdeathonPageComponent;
  let fixture: ComponentFixture<IdeathonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdeathonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdeathonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
