import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
// import { PhotoListComponent } from './photo-list/photo-list.component';

import { MatToolbarModule } from '@angular/material/toolbar';

describe('HeaderComponent', () => {
  let component: ComponentFixture<HeaderComponent>;
  let element: DebugElement;
  let html: HTMLElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          BrowserModule,
          BrowserAnimationsModule,
          MatToolbarModule
        ],
        declarations: [AppComponent, HeaderComponent],
        providers: []
      })
      component = TestBed.createComponent(HeaderComponent);
      console.log(component);
  })
  it('should have a title', () => {
    let title = "MarsPhotoSearch";
    component.detectChanges();
    element = component.debugElement.query(By.css('span'));
    html = element.nativeElement;
    expect(html.innerText).toBe(title);
  })


  // let fixture: ComponentFixture<HeaderComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HeaderComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HeaderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
