import * as utils from '../../../utils/utils';
import { StCoreAutocompleteTags } from '../autocomplete-tags';

describe('autocomplete-tags', () => {
  let component: StCoreAutocompleteTags;
  
  beforeEach(async () => {
    component = new StCoreAutocompleteTags();
  });

  describe('selectSkill',()=>{
    it('should add a skill', ()=>{
      component.onSelectSkill('value');
      expect(component.tagsToShow).toEqual(["value"]);
    });

    it('should clean filtered array', ()=>{
      component.filteredData = ['tag'];
      component.onSelectSkill('value');
      expect(component.filteredData).toEqual([]);
    });

    it('selectValue should emit', ()=>{
      component.tagsToShow = [];
      spyOn(component.selectElements, 'emit');
      component.onSelectSkill('value');
      expect(component.selectElements.emit).toHaveBeenCalledWith(['value']);
    });

  });

  describe('setElements',()=>{
    it('should set the tags ', ()=>{
      const event = new CustomEvent('event',{detail: [{value: 'tag-1'}, {value: 'tag-2'}]});
      component.setElements(event);
      expect(component.tagsToShow).toEqual(['tag-1', 'tag-2']);
    });
  });

  describe('searchSkills', ()=>{
    beforeEach(async () => {
      const tags = [
        "tag-1",
        "tag-2",
        "Others",
      ];
      component.tagsToSuggest = tags;
    });
    const event = {detail: {target: {value: 'tag'}}};
    const spy = jest.spyOn(utils, 'searchSkill');
    
    it('should have been called searchSkills', ()=>{
      component.searchSkills(event);
      expect(utils.searchSkill).toHaveBeenCalled();
    });

    it('filteredData should be equal to the return value of searchSkill',()=>{
      spy.mockReturnValue(["tag-1", "tag-2"]);
      component.searchSkills(event);
      expect(component.filteredData).toEqual(["tag-1", "tag-2"]);
    });
  });

});
