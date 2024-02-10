import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, LayoutComponent],
})
export class LayoutModule {}
