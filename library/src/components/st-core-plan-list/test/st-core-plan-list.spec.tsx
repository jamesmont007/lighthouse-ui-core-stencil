import { newSpecPage } from '@stencil/core/testing';
import { StCorePlanList } from '../st-core-plan-list';
import { h } from '@stencil/core';

describe('st-core-plan-list', () => {
  let component: StCorePlanList;

  beforeEach(async () => {
    component = new StCorePlanList();
  });
  it('renders', async () => {
    component.goalsToRender = [];
    const page = await newSpecPage({
      components: [StCorePlanList],
      template: () => (<st-core-plan-list goalsToRender={[]}></st-core-plan-list>)
    });
    expect(page.root).toBeDefined();
  });
});
