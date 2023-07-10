import { Link, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

export const QUERY = gql`
  query FindProducts {
    products {
      id
      name
      price
      imageUrl
      description
    }
  }
`

const ProductGrid = () => {
  const { loading, error, data } = useQuery(QUERY)
  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    })
    return formatter.format(price)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="mx-auto mt-10  grid w-full grid-cols-1 justify-items-center gap-5 lg:grid-cols-5">
      {data.products.map((product) => (
        <div
          key={product.id}
          className="card w-96 bg-base-100  shadow-xl lg:w-60"
        >
          <figure className="h-full w-full">
            <img
              src={product.imageUrl}
              alt="product"
              className="h-full max-h-60 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-slate-800">
              <Link to={routes.product({ id: product.id })}>
                {product.name}
              </Link>
            </h2>
            <h2 className="text-lg font-bold text-slate-900">
              {formatPrice(product.price)}
            </h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
