import { TemplateColumnEnum } from './template-column.enum';

export interface TemplateSortColumn {
    sortColumn: TemplateColumnEnum;
    ascOrder: boolean;
}
