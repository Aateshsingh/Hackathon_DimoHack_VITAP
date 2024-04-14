import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonPageComponent } from './hackathon-page.component';

describe('HackathonPageComponent', () => {
  let component: HackathonPageComponent;
  let fixture: ComponentFixture<HackathonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HackathonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackathonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
