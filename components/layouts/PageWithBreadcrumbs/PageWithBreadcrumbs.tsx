import React from 'react';
import Link from 'next/link';
import { Wrapper, Breadcrumbs, A } from './PageWithBreadcrumbs.styled';

const PageWithBreadcrumbs = ({ title, children }) => {
  return (
    <Wrapper>
      <Breadcrumbs>
        <Link href="/">
          <A>Home</A>
        </Link>
        <span>/</span>
        <span>{title}</span>
      </Breadcrumbs>
      {children}
    </Wrapper>
  );
};

export default PageWithBreadcrumbs;
