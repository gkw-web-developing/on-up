import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sklep/$productId/')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:3001/api/books/${params.productId}`)
    if (!res.ok) throw new Error('Product not found')
    return res.json()
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div>
      {product.title}
    </div>
  )
}