import { FC } from 'react';
import React from 'react';
import { Header, Footer } from './index';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({}) => {
  return (
    <body>
      <Header />
      <Footer />
    </body>
  );
};

export default Layout;
