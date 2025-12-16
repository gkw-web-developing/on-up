import { Product } from '@/data/products'
import React from 'react'

type Props = Pick<Product, 'qualifications'>

export default function ProductQualifsList({ qualifications }: Props) {
  return (
    <div className='mb-8'>
      <h2>Kwalifikacje:</h2>
      <ul className='flex gap-1'>
        {qualifications.map((qualification, idx) => (
          <li key={ idx }><span className='text-white text-sm bg-blue-500 rounded-full px-2 border-blue-600 border-2'>{ qualification }</span></li>
        ))}
      </ul>
    </div>
  )
}