import { Routes } from '@angular/router';

import { GetbalanceComponent } from './components/getbalance/getbalance.component';
import { GetblockComponent } from './components/getblock/getblock.component';

export const routes: Routes = [{component:GetbalanceComponent , path:"getbalance"},{component:GetblockComponent , path:"getblock"}];
