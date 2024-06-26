import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
