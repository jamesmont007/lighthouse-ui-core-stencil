import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Evaluation from './evaluation';
import EvaluationTemplate from './evaluationTemplate';
import SelectSkill from './selectSkill';
import SelectTemplate from './selectTemplate';
import SkillDetail from './skillDetail';
import SkillList from './skillList';
import Switch from './switch';
import Breadcrumbs from './breadcrumbs';
import Modal from './modal';

const Pages = () => (
  <main className="flex-grow-1 p-5">
    <Route exact path="/" component={Home} />
    <Route path="/evaluation" component={Evaluation} />
    <Route path="/evaluation-template" component={EvaluationTemplate} />
    <Route path="/select-skill" component={SelectSkill} />
    <Route path="/select-template" component={SelectTemplate} />
    <Route path="/skill-detail" component={SkillDetail} />
    <Route path="/skill-list" component={SkillList} />
    <Route path="/switch" component={Switch} />
    <Route path="/breadcrumbs" component={Breadcrumbs} />
    <Route path="/modal" component={Modal} />

  </main>
);

export default Pages;
