// import { Routes } from '@angular/router';
// import { Login } from './pages/login/login';
// import { Landing } from './pages/landing/landing';
// import { Dispatcher } from './pages/dispatcher/dispatcher';

// export const routes: Routes = [
//   { path: '', component: Landing}, // or your landing page component
//   { path: 'login', component: Login },
//   { path: 'dispatcher', component: Dispatcher },
//   // ...other routes
// ];
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Landing } from './pages/landing/landing';
import { Dispatcher } from './pages/dispatcher/dispatcher';
import { Overview } from './pages/dispatcher/overview/overview';  
import { Emergencies } from './pages/dispatcher/emergencies/emergencies';
import { Vehicles } from './pages/dispatcher/vehicles/vehicles';        
import { Personnel } from './pages/dispatcher/personnel/personnel';
import { Reports } from './pages/dispatcher/reports/reports';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: Login },
  { path: 'dispatcher', component: Dispatcher },
  
  {
    path: 'dashboard',
    component: Dispatcher,
    children: [
      { path: 'overview', component: Overview },
      { path: 'emergencies', component: Emergencies },
      { path: 'vehicles', component: Vehicles },
      { path: 'personnel', component: Personnel },
      { path: 'reports', component: Reports },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  },

  // Catch-all redirect to dashboard
  { path: '**', redirectTo: 'dashboard' }
];
