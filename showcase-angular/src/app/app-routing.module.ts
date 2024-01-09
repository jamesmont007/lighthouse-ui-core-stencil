import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

import { CorePaginatorComponent } from './components/core-paginator/core-paginator.component';
import { CoreSelectorComponent } from './components/core-selector/core-selector.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ModalComponent } from './components/modal/modal.component';
import { SelectSkillComponent } from './components/select-skill/select-skill.component';
import { SelectTemplateComponent } from './components/select-template/select-template.component';
import { SkillDetailComponent } from './components/skill-detail/skill-detail.component';
import { SkillEvaluationComponent } from './components/skill-evaluation/skill-evaluation.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SwitchInputComponent } from './components/switch-input/switch-input.component';

const routes: Routes = [
  {
    path: 'core-paginator',
    component: CorePaginatorComponent
  },
  {
    path: 'core-selector',
    component: CoreSelectorComponent
  },
  {
    path: 'select-skill',
    component: SelectSkillComponent
  },
  {
    path: 'select-template',
    component: SelectTemplateComponent
  },
  {
    path: 'skill-detail',
    component: SkillDetailComponent
  },
  {
    path: 'skill-list',
    component: SkillListComponent
  },
  {
    path: 'switch-input',
    component: SwitchInputComponent
  },
  {
    path: 'skill-evaluation',
    component: SkillEvaluationComponent
  },
  {
    path: 'breadcrumbs',
    component: BreadcrumbsComponent
  },
  {
    path: 'form-input',
    component: FormInputComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },

  {
    path: '',
    redirectTo: '/core-paginator',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: CorePaginatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
