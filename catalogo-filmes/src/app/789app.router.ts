// import { ModuleWidthProvider } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

export const APP_ROUTES: Routes = [
   { path: '/', component: HomeComponent }
];

// export const routing: ModuleWithProvider = RouterModule.forRoot(APP_ROUTES);
