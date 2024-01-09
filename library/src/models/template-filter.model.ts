import { TemplateSortColumn } from './template-sort.model';

export interface TemplateFilter {
    discipline?: string;
    form?: string;
    columnSortOrder?: TemplateSortColumn;
}
