import React, { useState } from 'react'

import type {
  DeleteProductMutationVariables,
  FindProducts,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Product/ProductsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: String!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

const ProductsList = ({ products }: FindProducts) => {
  const [searchKeyword, setSearchKeyword] = useState('')

  const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION, {
    onCompleted: () => {
      toast.success('Product deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const filterProducts = (products, searchKeyword) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  }

  const onDeleteClick = (id: DeleteProductMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete product ' + id + '?')) {
      deleteProduct({ variables: { id } })
    }
  }

  const filteredProducts = filterProducts(products, searchKeyword)

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <input
        className="input"
        type="text"
        placeholder="Search products..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Image URL</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Seller ID</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{truncate(product.id)}</td>
              <td>{truncate(product.name)}</td>
              <td>{truncate(product.brand)}</td>
              <td>{truncate(product.description)}</td>
              <td>{truncate(product.imageUrl)}</td>
              <td>{truncate(product.stock)}</td>
              <td>{truncate(product.price)}</td>
              <td>{truncate(product.sellerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.product({ id: product.id })}
                    title={'Show product ' + product.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProduct({ id: product.id })}
                    title={'Edit product ' + product.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete product ' + product.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(product.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsList
