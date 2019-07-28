import { NgModule } from '@angular/core';
import {
       MatToolbarModule,
       MatButtonModule,
       MatBadgeModule,
       MatSidenavModule,
       MatListModule,
       MatTabsModule,
       MatIconModule
        } from '@angular/material';
@NgModule({
    imports: [
        MatToolbarModule,
        MatBadgeModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatSidenavModule,
        MatButtonModule],
    exports: [
        MatToolbarModule,
        MatBadgeModule,
        MatIconModule,
        MatTabsModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule],
})
export class MaterialModule { }
