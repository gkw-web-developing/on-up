import ProductCard from '@/components/Product/ProductCard'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
  loader: async () => {
    const response = await fetch('http://localhost:3001/api/books')
    if (!response.ok) throw new Error('Błąd pobierania danych')
    return response.json()
  }
})

function RouteComponent() {
  const books = Route.useLoaderData()

  return (
    <main className="p-4">
      <ul className="list-disc pl-5">
        {Array.isArray(books) && books.map((book: any) => (
          <ProductCard key={book.id} data={book} />
        ))}
      </ul>
    </main>
  )
}