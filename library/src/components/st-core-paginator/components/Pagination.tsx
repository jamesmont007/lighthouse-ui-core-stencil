import { h, FunctionalComponent } from '@stencil/core';
import _ from 'lodash';

import { PageItem } from './PageItem';

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  pageNeighbors?: number;
  clickPage: any;
}

export const Pagination: FunctionalComponent<PaginationProps> = ({
  totalItems = 0,
  pageSize = 10,
  currentPage = 1,
  pageNeighbors = 2,
  clickPage,
}) => {
  const myPage = currentPage;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startPage = Math.max(1, currentPage - pageNeighbors);
  const endPage = Math.min(totalPages, currentPage + pageNeighbors);
  const pages = _.range(startPage, endPage + 1);

  return (
    pages.length > 0 && (
      <ul class="pagination">
        <PageItem
          label="&#10094;&#10094;"
          selectPage={() => clickPage(1)}
          disabled={myPage === 1}
        />
        <PageItem
          label="&#10094;"
          selectPage={() => clickPage(myPage - 1)}
          disabled={myPage === 1}
        />
        {pages.map((page) => (
          <PageItem
            label={page.toString()}
            selectPage={() => clickPage(page)}
            active={myPage === page}
          />
        ))}
        <PageItem
          label="&#10095;"
          selectPage={() => clickPage(myPage + 1)}
          disabled={myPage === totalPages}
        />
        <PageItem
          label="&#10095;&#10095;"
          selectPage={() => clickPage(totalPages)}
          disabled={myPage === totalPages}
        />
      </ul>
    )
  );
};
