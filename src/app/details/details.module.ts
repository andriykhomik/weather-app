import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { DetailsListComponent } from './components/details-list/details-list.component';
import { DetailsItemComponent } from './components/details-item/details-item.component';
import { DetailsHeaderComponent } from './components/details-header/details-header.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { DetailsListDataComponent } from './components/details-list-data/details-list-data.component';

const routes: Routes = [{ path: '', component: DetailsComponent }];

@NgModule({
  declarations: [
    DetailsComponent,
    DetailsListComponent,
    DetailsItemComponent,
    DetailsHeaderComponent,
    DetailsListDataComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    SharedModule,
  ],
})
export class DetailsModule {}
