import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProductDisplayProps = {
  data: {
    name: string,
    image: string,
    qualification: string[]
    price: number,
    urlSlug: string
  }
}

export default function ProductDisplay({ data }: ProductDisplayProps) {
  return (
    <Link href={ `/${data.urlSlug}` } className='w-min shadow-md rounded-lg overflow-clip'>
      <div className="w-75 aspect-3/4 relative">
        <Image src={`/images/${data.image}`} alt={`Podręcznik ${data.name}`} fill className="object-contain" />
      </div>
      <div className='bg-neutral-50 p-2'>
        <h2 className='font-bold mb-2 leading-tight'>{ data.name }</h2>
        <div className='mb-4'>
          <h3 className='text-sm'>Klasyfikacja:</h3>
          <ul className='flex gap-1'>
            {
              (data.qualification).map((qualification, idx) => (
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
