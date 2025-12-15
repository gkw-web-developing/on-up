import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
  href: string,
  children: string
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li><Link href={ href } 
    className='hover:bg-neutral-300/50 transition-colors duration-200 ease-in-out p-4 rounded-xl'
    >{ children }</Link></li>
  )
}