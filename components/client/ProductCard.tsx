import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/data/products';

type Props = {
  data: Product
}

export default function ProductCard({ data }: Props) {
  return (
    <Link href={ `/sklep/${ data.urlSlug }` } className='w-min shadow-md rounded-lg overflow-clip'>
      <div className="w-75 aspect-3/4 relative">
        <Image src={`/images/${ data.images.main }`} alt={`Podręcznik ${ data.title }`} fill className="object-contain" />
      </div>
      <div className='bg-neutral-50 p-2'>
        <h2 className='font-bold mb-2 leading-tight'>{ data.title }</h2>
        <div className='mb-4'>
          <h3 className='text-sm'>Klasyfikacja:</h3>
          <ul className='flex gap-1'>
            {
              (data.qualifications).map((qualification, idx) => (
                <li key={ idx }><span className='text-white text-sm bg-blue-300 rounded-full px-2 border-blue-400 border-2'>{ qualification }</span></li>
              ))
            }
          </ul>
        </div>
        <p className='text-right'><span className='font-semibold'>{(data.price).toFixed(2)}</span>{`PLN`}</p>
      </div>
    </Link>
  )
}
