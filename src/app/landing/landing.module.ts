import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingItemComponent } from './components/landing-item/landing-item.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  declarations: [LandingComponent, LandingItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatIconModule,
  ],
})
export class LandingModule {}
