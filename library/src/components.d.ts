/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ActionGoalSuggestedModel, ActionModel, DueDateModel, ErrorsModel, GoalModel, PlanModel, StateModel, SubCategoriActionModel, } from "./models/goal.model";
import { IBreadcrumbItem, } from "./components/breadcrumbs/models/breadcrumbs.interface";
import { FormModel, OptionsModel, SelfAssessmentModel, SkillModel, SortEvent, TemplateFilter, UserModel, UserSkillModel, } from "./models";
import { ColorsStatus, } from "./components/st-core-radar/models";
import { AssesFormat, SkillItem, } from "./utils/interfaces";
import { OptionsModel as OptionsModel1, } from "./models/options.model";
import { SortEvent as SortEvent1, } from "./models/sort-event.model";
export namespace Components {
    interface StCoreActionCard {
        "action": SubCategoriActionModel;
    }
    interface StCoreAutocomplete {
        "cleanDatalist": () => Promise<void>;
        "data": any[];
        "displayField": string;
        "emitMode": boolean;
        "inputClassField": string;
        "isDisabled": boolean;
        "searchLength": number;
        "value": string;
        "valueField": string;
    }
    interface StCoreAutocompleteTags {
        "canEnter": boolean;
        "cleanFilter": any[];
        "placeholder": string;
        "searchLength": number;
        "tags": string[];
        "tagsToSuggest": string[];
    }
    interface StCoreBoard {
        "actionsToRender": ActionModel;
        "mentorMode": boolean;
    }
    interface StCoreBreadcrumbs {
        "isValidation": boolean;
        "paths": IBreadcrumbItem[];
    }
    interface StCoreDatePicker {
        "classDate": string;
        "cleanInput": () => Promise<void>;
        "isDisabled": boolean;
        "max": string;
        "min": string;
        "value": string;
    }
    interface StCoreDropdown {
        "clear": () => Promise<void>;
        "clearData": boolean;
        "clearInput": () => Promise<void>;
        "data": any[];
        "disableFilterLogic": boolean;
        "isDisabled": boolean;
        "isImg": boolean;
        "isOneRegister": boolean;
        "list": any[];
        "searchLength": number;
        "valueFilter": string;
    }
    interface StCoreEnglishLevelSkill {
        "disabled": boolean;
        "level": number | undefined;
        "size": "sm" | "md" | "xs";
    }
    interface StCoreFinishedGrowthPlan {
        "finishedPlan": PlanModel;
    }
    interface StCoreFormInput {
        "classForm": string;
        "errorMsg": any;
        "errors": any;
        "labelText": string;
        "showRequired": boolean;
        "showSort": boolean;
        "sortAsc": boolean;
    }
    interface StCoreGoal {
        "goal": GoalModel;
        "mentorMode": boolean;
        "statusOptions": OptionsModel[];
    }
    interface StCoreGrowthPlan {
        "clearFilter": () => Promise<void>;
        "currentPlanBoard": any;
        "listMode": boolean;
        "mentorMode": boolean;
        "mentors": string[];
        "plan": PlanModel;
    }
    interface StCoreModal {
        "closeModal": () => Promise<void>;
        "openModal": () => Promise<void>;
        "position": string;
    }
    interface StCorePaginator {
        "page": number;
        "pageSize": number;
        "totalItems": number;
    }
    interface StCorePlanList {
        "goalsToRender": {
            state: number;
            goals: GoalModel[];
        }[];
        "mentorMode": boolean;
    }
    interface StCoreProfileTable {
        "data": {
            discipline: string;
            forms: {
                id: string;
                name: string;
            }[];
        }[];
        "isAdmin": boolean;
    }
    interface StCoreRadar {
        "categories": string[];
        "colors": ColorsStatus;
        "options": {};
        "radarTitle": string;
        "targetStatus": number[];
        "testMode": boolean;
        "userStatus": number[];
    }
    interface StCoreSelectSkill {
        "data": SkillItem[];
        "name": string;
    }
    interface StCoreSelectTemplate {
        "data": AssesFormat[];
        "disableEdit": boolean;
        "page": number;
        "pageSize": number;
        "totalItems": number;
    }
    interface StCoreSelector {
        "classSelect": string;
        "isDisabled": boolean;
        "name": string;
        "options": OptionsModel[];
        "placeholder": string;
        "selected": any;
        "value": any;
    }
    interface StCoreSelfAssessmentTooltip {
        "isAdmin": boolean;
        "showText": boolean;
        "skill": UserSkillModel;
    }
    interface StCoreSingleSkill {
        "identification": string;
        "inputChangeEvent": any;
        "readOnly": boolean;
        "skill": SkillModel;
        "translation": any;
    }
    interface StCoreSkillDetail {
        "info": {
            userSkill: UserSkillModel;
            index: number;
        };
        "levelsEnum": any;
    }
    interface StCoreSkillEvaluation {
        "clearData": () => Promise<void>;
        "disciplinesField": OptionsModel[];
        "evaluatedName": string;
        "evaluatorName": string;
        "formInfo": FormModel;
        "formName": string;
        "initialDiscipline": string;
        "isASingleSkill": boolean;
        "readOnly": boolean;
        "savePartial": () => Promise<void>;
        "showDownloadButton": boolean;
        "showInfoPanel": boolean;
        "skill": SkillModel;
        "skills": SkillModel[];
        "users": UserModel[];
    }
    interface StCoreSkillTable {
        "hasSoftSkills": boolean;
        "isEditable": boolean;
        "userSkills": UserSkillModel[];
    }
    interface StCoreSort {
        "column": string;
        "sortable": string;
    }
    interface StCoreStarsSkill {
        "definedLevel": boolean;
        "level": number | undefined;
        "name": string;
        "position": string;
        "resetStars": () => Promise<void>;
        "showZeroLevel": boolean;
        "size": "sm" | "md" | "xs";
    }
    interface StCoreSwitchInput {
        "dataAutomation": string;
        "readOnly": boolean;
        "size": "normal" | "small" | "x-small";
        "texts": {
            enabled: string;
            disabled: string;
        };
        "value": boolean;
    }
    interface StCoreSwitchSkill {
        "changeEvent": any;
        "defaultChecked": boolean;
        "disabledCheck": boolean;
        "name": string;
        "value": string | number | string[];
    }
    interface StCoreTable {
        "classTableName": string;
        "data": any;
        "isCustomBody": boolean;
        "thead": any[];
    }
    interface StCoreTag {
        "close": boolean;
        "element": any;
        "tag": string;
    }
    interface StCoreTagsInputs {
        "canEnter": boolean;
        "data": any[];
        "isHidden": boolean;
        "isInTable": boolean;
        "placeholder": string;
    }
    interface StCoreToast {
        "header": string;
        "message": string;
        "percentage": number;
        "type": string;
    }
    interface StCoreTooltip {
        "backgroundColor": string;
        "color": string;
        "handlerChangeVisibility": () => Promise<void>;
        "isDisabled": boolean;
        "positionTooltip": string;
        "size": "md" | "";
    }
    interface StCoreTooltipSkill {
        "hasDescriptionClass": boolean;
        "position": string;
        "suggested": boolean;
        "text": string;
    }
}
declare global {
    interface HTMLStCoreActionCardElement extends Components.StCoreActionCard, HTMLStencilElement {
    }
    var HTMLStCoreActionCardElement: {
        prototype: HTMLStCoreActionCardElement;
        new (): HTMLStCoreActionCardElement;
    };
    interface HTMLStCoreAutocompleteElement extends Components.StCoreAutocomplete, HTMLStencilElement {
    }
    var HTMLStCoreAutocompleteElement: {
        prototype: HTMLStCoreAutocompleteElement;
        new (): HTMLStCoreAutocompleteElement;
    };
    interface HTMLStCoreAutocompleteTagsElement extends Components.StCoreAutocompleteTags, HTMLStencilElement {
    }
    var HTMLStCoreAutocompleteTagsElement: {
        prototype: HTMLStCoreAutocompleteTagsElement;
        new (): HTMLStCoreAutocompleteTagsElement;
    };
    interface HTMLStCoreBoardElement extends Components.StCoreBoard, HTMLStencilElement {
    }
    var HTMLStCoreBoardElement: {
        prototype: HTMLStCoreBoardElement;
        new (): HTMLStCoreBoardElement;
    };
    interface HTMLStCoreBreadcrumbsElement extends Components.StCoreBreadcrumbs, HTMLStencilElement {
    }
    var HTMLStCoreBreadcrumbsElement: {
        prototype: HTMLStCoreBreadcrumbsElement;
        new (): HTMLStCoreBreadcrumbsElement;
    };
    interface HTMLStCoreDatePickerElement extends Components.StCoreDatePicker, HTMLStencilElement {
    }
    var HTMLStCoreDatePickerElement: {
        prototype: HTMLStCoreDatePickerElement;
        new (): HTMLStCoreDatePickerElement;
    };
    interface HTMLStCoreDropdownElement extends Components.StCoreDropdown, HTMLStencilElement {
    }
    var HTMLStCoreDropdownElement: {
        prototype: HTMLStCoreDropdownElement;
        new (): HTMLStCoreDropdownElement;
    };
    interface HTMLStCoreEnglishLevelSkillElement extends Components.StCoreEnglishLevelSkill, HTMLStencilElement {
    }
    var HTMLStCoreEnglishLevelSkillElement: {
        prototype: HTMLStCoreEnglishLevelSkillElement;
        new (): HTMLStCoreEnglishLevelSkillElement;
    };
    interface HTMLStCoreFinishedGrowthPlanElement extends Components.StCoreFinishedGrowthPlan, HTMLStencilElement {
    }
    var HTMLStCoreFinishedGrowthPlanElement: {
        prototype: HTMLStCoreFinishedGrowthPlanElement;
        new (): HTMLStCoreFinishedGrowthPlanElement;
    };
    interface HTMLStCoreFormInputElement extends Components.StCoreFormInput, HTMLStencilElement {
    }
    var HTMLStCoreFormInputElement: {
        prototype: HTMLStCoreFormInputElement;
        new (): HTMLStCoreFormInputElement;
    };
    interface HTMLStCoreGoalElement extends Components.StCoreGoal, HTMLStencilElement {
    }
    var HTMLStCoreGoalElement: {
        prototype: HTMLStCoreGoalElement;
        new (): HTMLStCoreGoalElement;
    };
    interface HTMLStCoreGrowthPlanElement extends Components.StCoreGrowthPlan, HTMLStencilElement {
    }
    var HTMLStCoreGrowthPlanElement: {
        prototype: HTMLStCoreGrowthPlanElement;
        new (): HTMLStCoreGrowthPlanElement;
    };
    interface HTMLStCoreModalElement extends Components.StCoreModal, HTMLStencilElement {
    }
    var HTMLStCoreModalElement: {
        prototype: HTMLStCoreModalElement;
        new (): HTMLStCoreModalElement;
    };
    interface HTMLStCorePaginatorElement extends Components.StCorePaginator, HTMLStencilElement {
    }
    var HTMLStCorePaginatorElement: {
        prototype: HTMLStCorePaginatorElement;
        new (): HTMLStCorePaginatorElement;
    };
    interface HTMLStCorePlanListElement extends Components.StCorePlanList, HTMLStencilElement {
    }
    var HTMLStCorePlanListElement: {
        prototype: HTMLStCorePlanListElement;
        new (): HTMLStCorePlanListElement;
    };
    interface HTMLStCoreProfileTableElement extends Components.StCoreProfileTable, HTMLStencilElement {
    }
    var HTMLStCoreProfileTableElement: {
        prototype: HTMLStCoreProfileTableElement;
        new (): HTMLStCoreProfileTableElement;
    };
    interface HTMLStCoreRadarElement extends Components.StCoreRadar, HTMLStencilElement {
    }
    var HTMLStCoreRadarElement: {
        prototype: HTMLStCoreRadarElement;
        new (): HTMLStCoreRadarElement;
    };
    interface HTMLStCoreSelectSkillElement extends Components.StCoreSelectSkill, HTMLStencilElement {
    }
    var HTMLStCoreSelectSkillElement: {
        prototype: HTMLStCoreSelectSkillElement;
        new (): HTMLStCoreSelectSkillElement;
    };
    interface HTMLStCoreSelectTemplateElement extends Components.StCoreSelectTemplate, HTMLStencilElement {
    }
    var HTMLStCoreSelectTemplateElement: {
        prototype: HTMLStCoreSelectTemplateElement;
        new (): HTMLStCoreSelectTemplateElement;
    };
    interface HTMLStCoreSelectorElement extends Components.StCoreSelector, HTMLStencilElement {
    }
    var HTMLStCoreSelectorElement: {
        prototype: HTMLStCoreSelectorElement;
        new (): HTMLStCoreSelectorElement;
    };
    interface HTMLStCoreSelfAssessmentTooltipElement extends Components.StCoreSelfAssessmentTooltip, HTMLStencilElement {
    }
    var HTMLStCoreSelfAssessmentTooltipElement: {
        prototype: HTMLStCoreSelfAssessmentTooltipElement;
        new (): HTMLStCoreSelfAssessmentTooltipElement;
    };
    interface HTMLStCoreSingleSkillElement extends Components.StCoreSingleSkill, HTMLStencilElement {
    }
    var HTMLStCoreSingleSkillElement: {
        prototype: HTMLStCoreSingleSkillElement;
        new (): HTMLStCoreSingleSkillElement;
    };
    interface HTMLStCoreSkillDetailElement extends Components.StCoreSkillDetail, HTMLStencilElement {
    }
    var HTMLStCoreSkillDetailElement: {
        prototype: HTMLStCoreSkillDetailElement;
        new (): HTMLStCoreSkillDetailElement;
    };
    interface HTMLStCoreSkillEvaluationElement extends Components.StCoreSkillEvaluation, HTMLStencilElement {
    }
    var HTMLStCoreSkillEvaluationElement: {
        prototype: HTMLStCoreSkillEvaluationElement;
        new (): HTMLStCoreSkillEvaluationElement;
    };
    interface HTMLStCoreSkillTableElement extends Components.StCoreSkillTable, HTMLStencilElement {
    }
    var HTMLStCoreSkillTableElement: {
        prototype: HTMLStCoreSkillTableElement;
        new (): HTMLStCoreSkillTableElement;
    };
    interface HTMLStCoreSortElement extends Components.StCoreSort, HTMLStencilElement {
    }
    var HTMLStCoreSortElement: {
        prototype: HTMLStCoreSortElement;
        new (): HTMLStCoreSortElement;
    };
    interface HTMLStCoreStarsSkillElement extends Components.StCoreStarsSkill, HTMLStencilElement {
    }
    var HTMLStCoreStarsSkillElement: {
        prototype: HTMLStCoreStarsSkillElement;
        new (): HTMLStCoreStarsSkillElement;
    };
    interface HTMLStCoreSwitchInputElement extends Components.StCoreSwitchInput, HTMLStencilElement {
    }
    var HTMLStCoreSwitchInputElement: {
        prototype: HTMLStCoreSwitchInputElement;
        new (): HTMLStCoreSwitchInputElement;
    };
    interface HTMLStCoreSwitchSkillElement extends Components.StCoreSwitchSkill, HTMLStencilElement {
    }
    var HTMLStCoreSwitchSkillElement: {
        prototype: HTMLStCoreSwitchSkillElement;
        new (): HTMLStCoreSwitchSkillElement;
    };
    interface HTMLStCoreTableElement extends Components.StCoreTable, HTMLStencilElement {
    }
    var HTMLStCoreTableElement: {
        prototype: HTMLStCoreTableElement;
        new (): HTMLStCoreTableElement;
    };
    interface HTMLStCoreTagElement extends Components.StCoreTag, HTMLStencilElement {
    }
    var HTMLStCoreTagElement: {
        prototype: HTMLStCoreTagElement;
        new (): HTMLStCoreTagElement;
    };
    interface HTMLStCoreTagsInputsElement extends Components.StCoreTagsInputs, HTMLStencilElement {
    }
    var HTMLStCoreTagsInputsElement: {
        prototype: HTMLStCoreTagsInputsElement;
        new (): HTMLStCoreTagsInputsElement;
    };
    interface HTMLStCoreToastElement extends Components.StCoreToast, HTMLStencilElement {
    }
    var HTMLStCoreToastElement: {
        prototype: HTMLStCoreToastElement;
        new (): HTMLStCoreToastElement;
    };
    interface HTMLStCoreTooltipElement extends Components.StCoreTooltip, HTMLStencilElement {
    }
    var HTMLStCoreTooltipElement: {
        prototype: HTMLStCoreTooltipElement;
        new (): HTMLStCoreTooltipElement;
    };
    interface HTMLStCoreTooltipSkillElement extends Components.StCoreTooltipSkill, HTMLStencilElement {
    }
    var HTMLStCoreTooltipSkillElement: {
        prototype: HTMLStCoreTooltipSkillElement;
        new (): HTMLStCoreTooltipSkillElement;
    };
    interface HTMLElementTagNameMap {
        "st-core-action-card": HTMLStCoreActionCardElement;
        "st-core-autocomplete": HTMLStCoreAutocompleteElement;
        "st-core-autocomplete-tags": HTMLStCoreAutocompleteTagsElement;
        "st-core-board": HTMLStCoreBoardElement;
        "st-core-breadcrumbs": HTMLStCoreBreadcrumbsElement;
        "st-core-date-picker": HTMLStCoreDatePickerElement;
        "st-core-dropdown": HTMLStCoreDropdownElement;
        "st-core-english-level-skill": HTMLStCoreEnglishLevelSkillElement;
        "st-core-finished-growth-plan": HTMLStCoreFinishedGrowthPlanElement;
        "st-core-form-input": HTMLStCoreFormInputElement;
        "st-core-goal": HTMLStCoreGoalElement;
        "st-core-growth-plan": HTMLStCoreGrowthPlanElement;
        "st-core-modal": HTMLStCoreModalElement;
        "st-core-paginator": HTMLStCorePaginatorElement;
        "st-core-plan-list": HTMLStCorePlanListElement;
        "st-core-profile-table": HTMLStCoreProfileTableElement;
        "st-core-radar": HTMLStCoreRadarElement;
        "st-core-select-skill": HTMLStCoreSelectSkillElement;
        "st-core-select-template": HTMLStCoreSelectTemplateElement;
        "st-core-selector": HTMLStCoreSelectorElement;
        "st-core-self-assessment-tooltip": HTMLStCoreSelfAssessmentTooltipElement;
        "st-core-single-skill": HTMLStCoreSingleSkillElement;
        "st-core-skill-detail": HTMLStCoreSkillDetailElement;
        "st-core-skill-evaluation": HTMLStCoreSkillEvaluationElement;
        "st-core-skill-table": HTMLStCoreSkillTableElement;
        "st-core-sort": HTMLStCoreSortElement;
        "st-core-stars-skill": HTMLStCoreStarsSkillElement;
        "st-core-switch-input": HTMLStCoreSwitchInputElement;
        "st-core-switch-skill": HTMLStCoreSwitchSkillElement;
        "st-core-table": HTMLStCoreTableElement;
        "st-core-tag": HTMLStCoreTagElement;
        "st-core-tags-inputs": HTMLStCoreTagsInputsElement;
        "st-core-toast": HTMLStCoreToastElement;
        "st-core-tooltip": HTMLStCoreTooltipElement;
        "st-core-tooltip-skill": HTMLStCoreTooltipSkillElement;
    }
}
declare namespace LocalJSX {
    interface StCoreActionCard {
        "action"?: SubCategoriActionModel;
        "onActionAccepted"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onActionInfo"?: (event: CustomEvent<string>) => void;
        "onActionRejected"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onEditAction"?: (event: CustomEvent<SubCategoriActionModel>) => void;
    }
    interface StCoreAutocomplete {
        "data"?: any[];
        "displayField"?: string;
        "emitMode"?: boolean;
        "inputClassField"?: string;
        "isDisabled"?: boolean;
        "onInputValue"?: (event: CustomEvent<any>) => void;
        "onSelectValue"?: (event: CustomEvent<any>) => void;
        "searchLength"?: number;
        "value"?: string;
        "valueField"?: string;
    }
    interface StCoreAutocompleteTags {
        "canEnter"?: boolean;
        "cleanFilter"?: any[];
        "onSelectElements"?: (event: CustomEvent<string[]>) => void;
        "placeholder"?: string;
        "searchLength"?: number;
        "tags"?: string[];
        "tagsToSuggest"?: string[];
    }
    interface StCoreBoard {
        "actionsToRender"?: ActionModel;
        "mentorMode"?: boolean;
        "onActionSuggestedAcceptedBoard"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onActionSuggestedRejectedBoard"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onCardMoved"?: (event: CustomEvent<StateModel>) => void;
        "onEditDoingAction"?: (event: CustomEvent<SubCategoriActionModel>) => void;
        "onEditDoneAction"?: (event: CustomEvent<SubCategoriActionModel>) => void;
        "onEditSuspendedDeclinedAction"?: (event: CustomEvent<SubCategoriActionModel>) => void;
        "onEditToDoAction"?: (event: CustomEvent<SubCategoriActionModel>) => void;
        "onErrorsList"?: (event: CustomEvent<ErrorsModel>) => void;
        "onGoalSuggestedAcceptedBoard"?: (event: CustomEvent<string>) => void;
        "onGoalSuggestedRejectedBoard"?: (event: CustomEvent<string>) => void;
        "onShowActionInfoBoard"?: (event: CustomEvent<string>) => void;
        "onShowAddActionList"?: (event: CustomEvent<GoalModel>) => void;
        "onShowGoalInfoList"?: (event: CustomEvent<string>) => void;
        "onUpdateActionDateList"?: (event: CustomEvent<DueDateModel>) => void;
        "onUpdateActionStateList"?: (event: CustomEvent<StateModel>) => void;
        "onUpdateGoalDateList"?: (event: CustomEvent<DueDateModel>) => void;
        "onUpdateGoalStateList"?: (event: CustomEvent<StateModel>) => void;
    }
    interface StCoreBreadcrumbs {
        "isValidation"?: boolean;
        "onBreadcrumbsClick"?: (event: CustomEvent<IBreadcrumbItem>) => void;
        "paths"?: IBreadcrumbItem[];
    }
    interface StCoreDatePicker {
        "classDate"?: string;
        "isDisabled"?: boolean;
        "max"?: string;
        "min"?: string;
        "onChangeDate"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface StCoreDropdown {
        "clearData"?: boolean;
        "data"?: any[];
        "disableFilterLogic"?: boolean;
        "isDisabled"?: boolean;
        "isImg"?: boolean;
        "isOneRegister"?: boolean;
        "list"?: any[];
        "onInputHandle"?: (event: CustomEvent<string>) => void;
        "onSelections"?: (event: CustomEvent<any>) => void;
        "searchLength"?: number;
        "valueFilter"?: string;
    }
    interface StCoreEnglishLevelSkill {
        "disabled"?: boolean;
        "level"?: number | undefined;
        "onSelectedLevel"?: (event: CustomEvent<{
            level: number | undefined;
            label: string | undefined;
        } | undefined>) => void;
        "size"?: "sm" | "md" | "xs";
    }
    interface StCoreFinishedGrowthPlan {
        "finishedPlan"?: PlanModel;
        "onFilters"?: (event: CustomEvent<{
            goal: string;
            state: string;
            startDate: string;
            endDate: string;
        }>) => void;
        "onShowActionInfo"?: (event: CustomEvent<string>) => void;
        "onShowGoalInfo"?: (event: CustomEvent<string>) => void;
        "onSort"?: (event: CustomEvent<SortEvent>) => void;
    }
    interface StCoreFormInput {
        "classForm"?: string;
        "errorMsg"?: any;
        "errors"?: any;
        "labelText"?: string;
        "onSendAscOrder"?: (event: CustomEvent<boolean>) => void;
        "showRequired"?: boolean;
        "showSort"?: boolean;
        "sortAsc"?: boolean;
    }
    interface StCoreGoal {
        "goal"?: GoalModel;
        "mentorMode"?: boolean;
        "onActionAccepted"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onActionDate"?: (event: CustomEvent<DueDateModel>) => void;
        "onActionInfo"?: (event: CustomEvent<string>) => void;
        "onActionRejected"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onActionState"?: (event: CustomEvent<StateModel>) => void;
        "onAddAction"?: (event: CustomEvent<GoalModel>) => void;
        "onGoalAccepted"?: (event: CustomEvent<string>) => void;
        "onGoalDate"?: (event: CustomEvent<DueDateModel>) => void;
        "onGoalErrors"?: (event: CustomEvent<ErrorsModel>) => void;
        "onGoalInfo"?: (event: CustomEvent<string>) => void;
        "onGoalRejected"?: (event: CustomEvent<string>) => void;
        "onGoalState"?: (event: CustomEvent<StateModel>) => void;
        "statusOptions"?: OptionsModel[];
    }
    interface StCoreGrowthPlan {
        "currentPlanBoard"?: any;
        "listMode"?: boolean;
        "mentorMode"?: boolean;
        "mentors"?: string[];
        "onActionSuggestedAccepted"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onActionSuggestedRejected"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onAddGoal"?: (event: CustomEvent<boolean>) => void;
        "onErrors"?: (event: CustomEvent<ErrorsModel>) => void;
        "onFilterPlanByName"?: (event: CustomEvent<string>) => void;
        "onFinishPlan"?: (event: CustomEvent<PlanModel>) => void;
        "onGoalSuggestedAccepted"?: (event: CustomEvent<string>) => void;
        "onGoalSuggestedRejected"?: (event: CustomEvent<string>) => void;
        "onSeeHistory"?: (event: CustomEvent<boolean>) => void;
        "onShowActionInfo"?: (event: CustomEvent<string>) => void;
        "onShowAddAction"?: (event: CustomEvent<GoalModel>) => void;
        "onShowBoardAddAction"?: (event: CustomEvent<boolean>) => void;
        "onShowBoardEditAction"?: (event: CustomEvent<SubCategoriActionModel>) => void;
        "onShowGoalInfo"?: (event: CustomEvent<string>) => void;
        "onSwitchMode"?: (event: CustomEvent<boolean>) => void;
        "onUpdateActionDate"?: (event: CustomEvent<DueDateModel>) => void;
        "onUpdateActionState"?: (event: CustomEvent<StateModel>) => void;
        "onUpdateGoalDate"?: (event: CustomEvent<DueDateModel>) => void;
        "onUpdateGoalState"?: (event: CustomEvent<StateModel>) => void;
        "onUpdateMentors"?: (event: CustomEvent<boolean>) => void;
        "onUpdateProjection"?: (event: CustomEvent<string>) => void;
        "plan"?: PlanModel;
    }
    interface StCoreModal {
        "position"?: string;
    }
    interface StCorePaginator {
        "onChangePage"?: (event: CustomEvent<any>) => void;
        "onChangePageSize"?: (event: CustomEvent<any>) => void;
        "page"?: number;
        "pageSize"?: number;
        "totalItems"?: number;
    }
    interface StCorePlanList {
        "goalsToRender"?: {
            state: number;
            goals: GoalModel[];
        }[];
        "mentorMode"?: boolean;
        "onActionSuggestedAcceptedList"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onActionSuggestedRejectedList"?: (event: CustomEvent<ActionGoalSuggestedModel>) => void;
        "onCardMoved"?: (event: CustomEvent<StateModel>) => void;
        "onErrorsList"?: (event: CustomEvent<ErrorsModel>) => void;
        "onGoalSuggestedAcceptedList"?: (event: CustomEvent<string>) => void;
        "onGoalSuggestedRejectedList"?: (event: CustomEvent<string>) => void;
        "onShowActionInfoList"?: (event: CustomEvent<string>) => void;
        "onShowAddActionList"?: (event: CustomEvent<GoalModel>) => void;
        "onShowGoalInfoList"?: (event: CustomEvent<string>) => void;
        "onUpdateActionDateList"?: (event: CustomEvent<DueDateModel>) => void;
        "onUpdateActionStateList"?: (event: CustomEvent<StateModel>) => void;
        "onUpdateGoalDateList"?: (event: CustomEvent<DueDateModel>) => void;
        "onUpdateGoalStateList"?: (event: CustomEvent<StateModel>) => void;
    }
    interface StCoreProfileTable {
        "data"?: {
            discipline: string;
            forms: {
                id: string;
                name: string;
            }[];
        }[];
        "isAdmin"?: boolean;
        "onDeleteForm"?: (event: CustomEvent<string>) => void;
    }
    interface StCoreRadar {
        "categories"?: string[];
        "colors"?: ColorsStatus;
        "options"?: {};
        "radarTitle"?: string;
        "targetStatus"?: number[];
        "testMode"?: boolean;
        "userStatus"?: number[];
    }
    interface StCoreSelectSkill {
        "data"?: SkillItem[];
        "name"?: string;
        "onSendSearch"?: (event: CustomEvent<string>) => void;
        "onSendSkillId"?: (event: CustomEvent<string>) => void;
    }
    interface StCoreSelectTemplate {
        "data"?: AssesFormat[];
        "disableEdit"?: boolean;
        "onChangePage"?: (event: CustomEvent<any>) => void;
        "onChangePageSize"?: (event: CustomEvent<any>) => void;
        "onSendFilters"?: (event: CustomEvent<TemplateFilter>) => void;
        "onSendTemplateId"?: (event: CustomEvent<string>) => void;
        "page"?: number;
        "pageSize"?: number;
        "totalItems"?: number;
    }
    interface StCoreSelector {
        "classSelect"?: string;
        "isDisabled"?: boolean;
        "name"?: string;
        "onSelectElement"?: (event: CustomEvent<any>) => void;
        "options"?: OptionsModel[];
        "placeholder"?: string;
        "selected"?: any;
        "value"?: any;
    }
    interface StCoreSelfAssessmentTooltip {
        "isAdmin"?: boolean;
        "onSendSelfAssessment"?: (event: CustomEvent<SelfAssessmentModel>) => void;
        "showText"?: boolean;
        "skill"?: UserSkillModel;
    }
    interface StCoreSingleSkill {
        "identification"?: string;
        "inputChangeEvent"?: any;
        "readOnly"?: boolean;
        "skill"?: SkillModel;
        "translation"?: any;
    }
    interface StCoreSkillDetail {
        "info"?: {
            userSkill: UserSkillModel;
            index: number;
        };
        "levelsEnum"?: any;
    }
    interface StCoreSkillEvaluation {
        "disciplinesField"?: OptionsModel[];
        "evaluatedName"?: string;
        "evaluatorName"?: string;
        "formInfo"?: FormModel;
        "formName"?: string;
        "initialDiscipline"?: string;
        "isASingleSkill"?: boolean;
        "onAddNewSkill"?: (event: CustomEvent<string>) => void;
        "onDownloadReport"?: (event: CustomEvent<string>) => void;
        "onInputEmployee"?: (event: CustomEvent<string>) => void;
        "onSavedPartial"?: (event: CustomEvent<string>) => void;
        "onSelectedDate"?: (event: CustomEvent<string>) => void;
        "onSelectedDiscipline"?: (event: CustomEvent<string>) => void;
        "onSelectedEmployee"?: (event: CustomEvent<string>) => void;
        "onSubmitEvent"?: (event: CustomEvent<any>) => void;
        "readOnly"?: boolean;
        "showDownloadButton"?: boolean;
        "showInfoPanel"?: boolean;
        "skill"?: SkillModel;
        "skills"?: SkillModel[];
        "users"?: UserModel[];
    }
    interface StCoreSkillTable {
        "hasSoftSkills"?: boolean;
        "isEditable"?: boolean;
        "onFilters"?: (event: CustomEvent<{
            displayName: string;
            date: string;
            level: string;
            type: string;
            observation: string;
            discipline: string;
        }>) => void;
        "onSeeHistorical"?: (event: CustomEvent<{
            skillId: string;
        }>) => void;
        "onSetSelfAssessment"?: (event: CustomEvent<SelfAssessmentModel>) => void;
        "onSort"?: (event: CustomEvent<SortEvent>) => void;
        "userSkills"?: UserSkillModel[];
    }
    interface StCoreSort {
        "column"?: string;
        "onSort"?: (event: CustomEvent<SortEvent>) => void;
        "sortable"?: string;
    }
    interface StCoreStarsSkill {
        "definedLevel"?: boolean;
        "level"?: number | undefined;
        "name"?: string;
        "onSelectedStar"?: (event: CustomEvent<number>) => void;
        "position"?: string;
        "showZeroLevel"?: boolean;
        "size"?: "sm" | "md" | "xs";
    }
    interface StCoreSwitchInput {
        "dataAutomation"?: string;
        "onSwitchHandler"?: (event: CustomEvent<boolean>) => void;
        "readOnly"?: boolean;
        "size"?: "normal" | "small" | "x-small";
        "texts"?: {
            enabled: string;
            disabled: string;
        };
        "value"?: boolean;
    }
    interface StCoreSwitchSkill {
        "changeEvent"?: any;
        "defaultChecked"?: boolean;
        "disabledCheck"?: boolean;
        "name"?: string;
        "value"?: string | number | string[];
    }
    interface StCoreTable {
        "classTableName"?: string;
        "data"?: any;
        "isCustomBody"?: boolean;
        "thead"?: any[];
    }
    interface StCoreTag {
        "close"?: boolean;
        "element"?: any;
        "onRemoveElement"?: (event: CustomEvent<any>) => void;
        "tag"?: string;
    }
    interface StCoreTagsInputs {
        "canEnter"?: boolean;
        "data"?: any[];
        "isHidden"?: boolean;
        "isInTable"?: boolean;
        "onAddElement"?: (event: CustomEvent<any>) => void;
        "onAutoInput"?: (event: CustomEvent<string>) => void;
        "onSetElements"?: (event: CustomEvent<string[]>) => void;
        "onUpKey"?: (event: CustomEvent<boolean>) => void;
        "placeholder"?: string;
    }
    interface StCoreToast {
        "header"?: string;
        "message"?: string;
        "percentage"?: number;
        "type"?: string;
    }
    interface StCoreTooltip {
        "backgroundColor"?: string;
        "color"?: string;
        "isDisabled"?: boolean;
        "positionTooltip"?: string;
        "size"?: "md" | "";
    }
    interface StCoreTooltipSkill {
        "hasDescriptionClass"?: boolean;
        "position"?: string;
        "suggested"?: boolean;
        "text"?: string;
    }
    interface IntrinsicElements {
        "st-core-action-card": StCoreActionCard;
        "st-core-autocomplete": StCoreAutocomplete;
        "st-core-autocomplete-tags": StCoreAutocompleteTags;
        "st-core-board": StCoreBoard;
        "st-core-breadcrumbs": StCoreBreadcrumbs;
        "st-core-date-picker": StCoreDatePicker;
        "st-core-dropdown": StCoreDropdown;
        "st-core-english-level-skill": StCoreEnglishLevelSkill;
        "st-core-finished-growth-plan": StCoreFinishedGrowthPlan;
        "st-core-form-input": StCoreFormInput;
        "st-core-goal": StCoreGoal;
        "st-core-growth-plan": StCoreGrowthPlan;
        "st-core-modal": StCoreModal;
        "st-core-paginator": StCorePaginator;
        "st-core-plan-list": StCorePlanList;
        "st-core-profile-table": StCoreProfileTable;
        "st-core-radar": StCoreRadar;
        "st-core-select-skill": StCoreSelectSkill;
        "st-core-select-template": StCoreSelectTemplate;
        "st-core-selector": StCoreSelector;
        "st-core-self-assessment-tooltip": StCoreSelfAssessmentTooltip;
        "st-core-single-skill": StCoreSingleSkill;
        "st-core-skill-detail": StCoreSkillDetail;
        "st-core-skill-evaluation": StCoreSkillEvaluation;
        "st-core-skill-table": StCoreSkillTable;
        "st-core-sort": StCoreSort;
        "st-core-stars-skill": StCoreStarsSkill;
        "st-core-switch-input": StCoreSwitchInput;
        "st-core-switch-skill": StCoreSwitchSkill;
        "st-core-table": StCoreTable;
        "st-core-tag": StCoreTag;
        "st-core-tags-inputs": StCoreTagsInputs;
        "st-core-toast": StCoreToast;
        "st-core-tooltip": StCoreTooltip;
        "st-core-tooltip-skill": StCoreTooltipSkill;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "st-core-action-card": LocalJSX.StCoreActionCard & JSXBase.HTMLAttributes<HTMLStCoreActionCardElement>;
            "st-core-autocomplete": LocalJSX.StCoreAutocomplete & JSXBase.HTMLAttributes<HTMLStCoreAutocompleteElement>;
            "st-core-autocomplete-tags": LocalJSX.StCoreAutocompleteTags & JSXBase.HTMLAttributes<HTMLStCoreAutocompleteTagsElement>;
            "st-core-board": LocalJSX.StCoreBoard & JSXBase.HTMLAttributes<HTMLStCoreBoardElement>;
            "st-core-breadcrumbs": LocalJSX.StCoreBreadcrumbs & JSXBase.HTMLAttributes<HTMLStCoreBreadcrumbsElement>;
            "st-core-date-picker": LocalJSX.StCoreDatePicker & JSXBase.HTMLAttributes<HTMLStCoreDatePickerElement>;
            "st-core-dropdown": LocalJSX.StCoreDropdown & JSXBase.HTMLAttributes<HTMLStCoreDropdownElement>;
            "st-core-english-level-skill": LocalJSX.StCoreEnglishLevelSkill & JSXBase.HTMLAttributes<HTMLStCoreEnglishLevelSkillElement>;
            "st-core-finished-growth-plan": LocalJSX.StCoreFinishedGrowthPlan & JSXBase.HTMLAttributes<HTMLStCoreFinishedGrowthPlanElement>;
            "st-core-form-input": LocalJSX.StCoreFormInput & JSXBase.HTMLAttributes<HTMLStCoreFormInputElement>;
            "st-core-goal": LocalJSX.StCoreGoal & JSXBase.HTMLAttributes<HTMLStCoreGoalElement>;
            "st-core-growth-plan": LocalJSX.StCoreGrowthPlan & JSXBase.HTMLAttributes<HTMLStCoreGrowthPlanElement>;
            "st-core-modal": LocalJSX.StCoreModal & JSXBase.HTMLAttributes<HTMLStCoreModalElement>;
            "st-core-paginator": LocalJSX.StCorePaginator & JSXBase.HTMLAttributes<HTMLStCorePaginatorElement>;
            "st-core-plan-list": LocalJSX.StCorePlanList & JSXBase.HTMLAttributes<HTMLStCorePlanListElement>;
            "st-core-profile-table": LocalJSX.StCoreProfileTable & JSXBase.HTMLAttributes<HTMLStCoreProfileTableElement>;
            "st-core-radar": LocalJSX.StCoreRadar & JSXBase.HTMLAttributes<HTMLStCoreRadarElement>;
            "st-core-select-skill": LocalJSX.StCoreSelectSkill & JSXBase.HTMLAttributes<HTMLStCoreSelectSkillElement>;
            "st-core-select-template": LocalJSX.StCoreSelectTemplate & JSXBase.HTMLAttributes<HTMLStCoreSelectTemplateElement>;
            "st-core-selector": LocalJSX.StCoreSelector & JSXBase.HTMLAttributes<HTMLStCoreSelectorElement>;
            "st-core-self-assessment-tooltip": LocalJSX.StCoreSelfAssessmentTooltip & JSXBase.HTMLAttributes<HTMLStCoreSelfAssessmentTooltipElement>;
            "st-core-single-skill": LocalJSX.StCoreSingleSkill & JSXBase.HTMLAttributes<HTMLStCoreSingleSkillElement>;
            "st-core-skill-detail": LocalJSX.StCoreSkillDetail & JSXBase.HTMLAttributes<HTMLStCoreSkillDetailElement>;
            "st-core-skill-evaluation": LocalJSX.StCoreSkillEvaluation & JSXBase.HTMLAttributes<HTMLStCoreSkillEvaluationElement>;
            "st-core-skill-table": LocalJSX.StCoreSkillTable & JSXBase.HTMLAttributes<HTMLStCoreSkillTableElement>;
            "st-core-sort": LocalJSX.StCoreSort & JSXBase.HTMLAttributes<HTMLStCoreSortElement>;
            "st-core-stars-skill": LocalJSX.StCoreStarsSkill & JSXBase.HTMLAttributes<HTMLStCoreStarsSkillElement>;
            "st-core-switch-input": LocalJSX.StCoreSwitchInput & JSXBase.HTMLAttributes<HTMLStCoreSwitchInputElement>;
            "st-core-switch-skill": LocalJSX.StCoreSwitchSkill & JSXBase.HTMLAttributes<HTMLStCoreSwitchSkillElement>;
            "st-core-table": LocalJSX.StCoreTable & JSXBase.HTMLAttributes<HTMLStCoreTableElement>;
            "st-core-tag": LocalJSX.StCoreTag & JSXBase.HTMLAttributes<HTMLStCoreTagElement>;
            "st-core-tags-inputs": LocalJSX.StCoreTagsInputs & JSXBase.HTMLAttributes<HTMLStCoreTagsInputsElement>;
            "st-core-toast": LocalJSX.StCoreToast & JSXBase.HTMLAttributes<HTMLStCoreToastElement>;
            "st-core-tooltip": LocalJSX.StCoreTooltip & JSXBase.HTMLAttributes<HTMLStCoreTooltipElement>;
            "st-core-tooltip-skill": LocalJSX.StCoreTooltipSkill & JSXBase.HTMLAttributes<HTMLStCoreTooltipSkillElement>;
        }
    }
}
