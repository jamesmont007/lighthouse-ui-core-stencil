import { h, FunctionalComponent } from '@stencil/core';

interface PageItemProps {
  label: string;
  active?: boolean;
  disabled?: boolean;
  classnames?: string;
  isDisable?: boolean;
  selectPage: any;
}

export const PageItem: FunctionalComponent<PageItemProps> = ({
  label,
  active,
  disabled,
  classnames,
  isDisable,
  selectPage,
}) => (
  <li
    class={`${classnames} page-item ${active ? 'active' : ''}  ${
      disabled ? 'disabled' : ''
    }`}
  >
    <button
      class="page-link rounded-circle"
      onClick={(e) => selectPage(e)}
      disabled={isDisable}
    >
      {label}
    </button>
  </li>
);
