import { useState } from 'react'

import { PickerInline } from 'filestack-react'
import type { EditProductById, UpdateProductInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import { useAuth } from 'src/auth'

type FormProduct = NonNullable<EditProductById['product']>

interface ProductFormProps {
  product?: EditProductById['product']
  onSave: (data: UpdateProductInput, id?: FormProduct['id']) => void
  error: RWGqlError
  loading: boolean
}

const ProductForm = (props: ProductFormProps) => {
  const { currentUser } = useAuth()
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)

  const onSubmit = async (data: FormProduct) => {
    const updatedData = {
      ...data,
      sellerId: currentUser?.id,
      imageUrl: uploadedImageUrl || props.product?.imageUrl,
    }
    props.onSave(updatedData, props?.product?.id)
  }

  const onFileUpload = (response) => {
    const uploadedFile = response.filesUploaded[0]
    if (uploadedFile) {
      setUploadedImageUrl(uploadedFile.url)
    }
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormProduct> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.product?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="brand"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Brand
        </Label>

        <TextField
          name="brand"
          defaultValue={props.product?.brand}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="brand" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.product?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>

        <PickerInline
          apikey={process.env.FILESTACK_API_KEY}
          onSuccess={onFileUpload}
        />

        <FieldError name="imageUrl" className="rw-field-error" />

        <Label
          name="stock"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stock
        </Label>

        <NumberField
          name="stock"
          defaultValue={props.product?.stock}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="stock" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.product?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        {/* <Label
          name="sellerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Seller id
        </Label>

        <TextField
          name="sellerId"
          defaultValue={props.product?.sellerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sellerId" className="rw-field-error" /> */}

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProductForm
