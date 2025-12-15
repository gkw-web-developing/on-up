import React from 'react'
import Link from 'next/link'

type NavLinkProps = {
  href: string,
  children: string
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li><Link href={ href }>{ children }</Link></li>
  )
}