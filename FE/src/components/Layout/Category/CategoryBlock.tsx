import CategoryHeading from './CategoryHeading';

export default function CategoryBlock({ category }: any) {

  const categoryData = categories.find(c => c.name === category);
  if (!categoryData) return null;

  return (
    <section>
      <CategoryHeading>{categoryData.text}</CategoryHeading>
      <div className='grid grid-cols-5 gap-4 overflow-auto py-4'>

      </div>
    </section>
  )
}