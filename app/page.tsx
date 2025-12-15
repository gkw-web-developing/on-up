import ProductDisplay from '@/components/client/ProductDisplay';
import products from '@/public/products.json';

import Image from 'next/image';

export default function RootPage() {
  return (
    <>
      <section>
        <div className='flex'>
          <Image src={'/images/strzalki-prawo.webp'} alt='' width={150} height={50}/>
          <h1 className='uppercase font-extrabold text-white text-3xl bg-black rounded-lg p-2 px-4 w-fit'>Technik eksploatacji portów i terminali</h1>
          <Image src={'/images/strzalki-lewo.webp'} alt='' width={150} height={50}/>
        </div>
        <div className='flex gap-4 overflow-auto py-4'>
          {
            products.map((product, idx) => (
              <ProductDisplay key={ idx } data={ product } />
            ))
          }
        </div>
      </section>
      <section>
        <div className='flex'>
          <Image src={'/images/strzalki-prawo.webp'} alt='' width={150} height={50}/>
          <h1 className='uppercase font-extrabold text-white text-3xl bg-black rounded-lg p-2 px-4 w-fit'>Technik eksploatacji portów i terminali</h1>
          <Image src={'/images/strzalki-lewo.webp'} alt='' width={150} height={50}/>
        </div>
        <div className='flex gap-4 overflow-auto py-4'>
          {
            products.map((product, idx) => (
              <ProductDisplay key={ idx } data={ product } />
            ))
          }
        </div>
      </section>
      <section>
        <div className='flex'>
          <Image src={'/images/strzalki-prawo.webp'} alt='' width={150} height={50}/>
          <h1 className='uppercase font-extrabold text-white text-3xl bg-black rounded-lg p-2 px-4 w-fit'>Technik eksploatacji portów i terminali</h1>
          <Image src={'/images/strzalki-lewo.webp'} alt='' width={150} height={50}/>
        </div>
        <div className='flex gap-4 overflow-auto py-4'>
          {
            products.map((product, idx) => (
              <ProductDisplay key={ idx } data={ product } />
            ))
          }
        </div>
      </section>
    </>
  );
}
