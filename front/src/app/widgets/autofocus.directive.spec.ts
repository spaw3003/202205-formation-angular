import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  selector: 'app-test',
  template: '<input appAutoFocus />',
})
export class TestComponent {}

@Component({
  selector: 'app-test-with-select',
  template: '<input appAutoFocus="select" class="test-with-select" />',
})
export class InputWithSelectComponent {}

describe('AutofocusDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        InputWithSelectComponent,
        AutofocusDirective,
      ],
    }).compileComponents();
  });

  it('should autofocus', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(document.activeElement).toBe(compiled.querySelector('input'));
  });

  it('should selected in input with select', () => {
    const fixture = TestBed.createComponent(InputWithSelectComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(document.activeElement).toBe(
      compiled.querySelector('input.test-with-select')
    );
  });
});
