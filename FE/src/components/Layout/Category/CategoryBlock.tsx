import CategoryHeading from './CategoryHeading';
import ProductCard from '@/components/Product/ProductCard';

export default function CategoryBlock({ title, books }: { title: string, books: any[] }) {

  return (
    <section>
      <CategoryHeading>{title}</CategoryHeading>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-auto py-4'>
        {books.map((book: any) => (
          <ProductCard key={book.id} data={book} />
        ))}
      </div>
    </section>
  )
}
