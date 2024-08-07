import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightSideComponent } from './copyright-side.component';

describe('CopyrightSideComponent', () => {
  let component: CopyrightSideComponent;
  let fixture: ComponentFixture<CopyrightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyrightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
