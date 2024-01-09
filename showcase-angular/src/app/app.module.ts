import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SelectSkillComponent } from './components/select-skill/select-skill.component';
import { SelectTemplateComponent } from './components/select-template/select-template.component';
import { SkillDetailComponent } from './components/skill-detail/skill-detail.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SwitchInputComponent } from './components/switch-input/switch-input.component';
import { CoreSelectorComponent } from './components/core-selector/core-selector.component';
import { CorePaginatorComponent } from './components/core-paginator/core-paginator.component';
import { SkillEvaluationComponent } from './components/skill-evaluation/skill-evaluation.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectSkillComponent,
    SelectTemplateComponent,
    SkillDetailComponent,
    SkillListComponent,
    SwitchInputComponent,
    CoreSelectorComponent,
    CorePaginatorComponent,
    SkillEvaluationComponent,
    BreadcrumbsComponent,
    FormInputComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
