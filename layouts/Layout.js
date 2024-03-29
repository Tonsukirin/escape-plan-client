/* eslint-disable react-hooks/exhaustive-deps */
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { user } = useSelector(state => state.user);

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      if (
        router.pathname.includes('main-menu') ||
        router.pathname.includes('waiting') ||
        router.pathname.includes('game-time')
      ) {
        Router.push('auth');
      }
    }
  }, []);

  return (
    <div
      className="w-100 vh-100"
      style={{
        backgroundImage: 'url("/img/city-bg.gif")',
        backgroundSize: 'cover',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
