import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateoryeditComponent } from './cateoryedit.component';

describe('CateoryeditComponent', () => {
  let component: CateoryeditComponent;
  let fixture: ComponentFixture<CateoryeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateoryeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CateoryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
