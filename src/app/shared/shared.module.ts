import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {SkillBubbleComponent} from './skill-bubble/skill-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, SkillBubbleComponent],
  declarations: [NavbarComponent, SkillBubbleComponent]
})
export class SharedModule { }
