"use client";

import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';

const navMap = [
  {
    name: "Konto",
    redirect: "/konto"
  },
  {
    name: "Koszyk",
    redirect: "/koszyk"
  }
]

export default function Navigation() {
  return (
    <nav className='ml-auto'>
      <ul className='h-full flex gap-4 items-center'>
        {
          navMap.map((item, idx) => (
            <NavLink key={ idx } href={ item.redirect }>{ item.name }</NavLink>
          ))
        }
      </ul>
    </nav>
  )
}
