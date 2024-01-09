import { Component, OnInit } from '@angular/core';
import { IBreadcrumbItem } from 'lighthouse-ui-core-stencil/dist/types/components/breadcrumbs/models/breadcrumbs.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {
  data: IBreadcrumbItem[] = [
    { text: 'Abuelo', link: 'LinkAbuelo' },
    { text: 'padre', link: 'LinkPadre', dataAutomation: 'auto-link-padre' },
    { text: 'hijo' },
  ];

  constructor() {}

  ngOnInit() {}
}
