import React from 'react';
import Logo from './Logo';
import Navigation from '../../client/Navigation';

export default function Header() {
  return (
    <header className='flex p-2 px-8 sticky top-0 z-100000 bg-white'>
        <Logo />
        <Navigation />
    </header>
  )
}