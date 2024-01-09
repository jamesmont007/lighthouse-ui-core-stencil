import { StCoreTag } from '../st-core-tag';

describe('st-core-tag', () => {
  let component: StCoreTag;
  
  beforeEach(async () => {
    component = new StCoreTag();    
  });

  it('renders', async () => {  
    expect(component).toBeTruthy();    
  });
});
