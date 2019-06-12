// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { AppComponent } from './app/app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AdminLayoutComponent } from './app/layouts/admin-layout/admin-layout.component';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
TestBed.configureTestingModule({
  declarations: [
      AppComponent,
      AdminLayoutComponent
  ],
  schemas: [
      NO_ERRORS_SCHEMA
  ]
}).compileComponents();
