/* eslint-disable react-hooks/exhaustive-deps */
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable @next/next/no-img-element */
const Layout = ({ children }) => {
  return (
    <div
      className="w-100 vh-100 d-inline-flex flex-column justify-content-center"
      style={{
        backgroundImage: 'url("/img/city-bg.gif")',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
