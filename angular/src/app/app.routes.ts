import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { PedroLimon } from './pedro-limon/pedro-limon.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pedro-limon', component: PedroLimon },
];