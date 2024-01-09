import {
  Component,
  ComponentInterface,
  EventEmitter,
  FunctionalComponent,
  h,
  Host,
  Prop,
  State,
  Watch,
  Event,
} from '@stencil/core';

import { IBreadcrumbItem } from './models/breadcrumbs.interface';

@Component({
  tag: 'st-core-breadcrumbs',
  styleUrl: 'breadcrumbs.component.scss',
  shadow: true,
})
export class Breadcrumbs implements ComponentInterface {
  @Prop() paths: IBreadcrumbItem[];
  @Prop() isValidation = false;
  @Event() breadcrumbsClick: EventEmitter<IBreadcrumbItem>;
  @State() rendPaths: IBreadcrumbItem[];

  componentWillLoad() {
    this.pathsWillUpdate(this.paths);
  }

  @Watch('paths')
  pathsWillUpdate(newValue: IBreadcrumbItem[]) {
    newValue ? this.rendPaths = [...newValue] : this.rendPaths = [];
  }

  render() {
    if (this.isValidation) {
      return (
        <Host>
          <ul>
            {this.rendPaths.map((item, i) => (
              <BreadcrumbValidation
                allItems={this.rendPaths.length}
                index={i}
                item={item}
                redirect={this.breadcrumbsClick}
              />
            ))}
          </ul>
        </Host>
      );
    }
    return (
      <Host>
        <ul>
          {this.rendPaths.map((item, i) => (
            <Breadcrumb
              allItems={this.rendPaths.length}
              index={i}
              item={item}
            />
          ))}
        </ul>
      </Host>
    );
  }
}

interface BreadcrumbsProps {
  item: IBreadcrumbItem;
  index: number;
  allItems: number;
  redirect?: EventEmitter<IBreadcrumbItem>;
}

const Breadcrumb: FunctionalComponent<BreadcrumbsProps> = ({
  item,
  allItems,
  index,
}) => {
  const classes = index === allItems - 1 ? 'item-current' : '';
  return (
    <li>
      {item.link ? (
        <a class={`item ${classes}`} href={item.link} {...item} />
      ) : (
        <a class={`item ${classes}`} {...item} />
      )}
    </li>
  );
};

const BreadcrumbValidation: FunctionalComponent<BreadcrumbsProps> = ({
  item,
  allItems,
  index,
  redirect,
}) => {
  const classes = index === allItems - 1 ? 'item-current' : '';
  return (
    <li>
      {item.link ? (
        <a
          class={`item ${classes}`}
          onClick={() => redirect.emit(item)}
          {...item}
        />
      ) : (
        <a class={`item ${classes}`} {...item} />
      )}
    </li>
  );
};
