import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesPrintComponent } from './packages-print.component';

describe('PackagesPrintComponent', () => {
  let component: PackagesPrintComponent;
  let fixture: ComponentFixture<PackagesPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
