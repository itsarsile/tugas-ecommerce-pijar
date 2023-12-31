import { useState } from 'react'

import { PickerInline } from 'filestack-react'
import type { EditUserById, UpdateUserInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)

  const onSubmit = async (data: FormUser) => {
    const updatedData = {
      ...data,
      imageUrl: uploadedImageUrl || props.user?.imageUrl,
    }
    props.onSave(updatedData, props?.user?.id)
  }

  const onFileUpload = (response) => {
    const uploadedFile = response.filesUploaded[0]
    if (uploadedFile) {
      setUploadedImageUrl(uploadedFile.url)
    }
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="hashedPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hashed password
        </Label>

        <TextField
          name="hashedPassword"
          defaultValue={props.user?.hashedPassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

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
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>

        <TextField
          name="salt"
          defaultValue={props.user?.salt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>

        <TextField
          name="resetToken"
          defaultValue={props.user?.resetToken}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>

        <DatetimeLocalField
          name="resetTokenExpiresAt"
          defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

        <Label
          name="roles"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Roles
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-0"
            name="roles"
            defaultValue="SELLER"
            defaultChecked={props.user?.roles?.includes('SELLER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Seller</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-1"
            name="roles"
            defaultValue="CUSTOMER"
            defaultChecked={props.user?.roles?.includes('CUSTOMER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Customer</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-2"
            name="roles"
            defaultValue="ADMIN"
            defaultChecked={props.user?.roles?.includes('ADMIN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Admin</div>
        </div>

        <FieldError name="roles" className="rw-field-error" />

        <Label
          name="store"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Store
        </Label>

        <TextField
          name="store"
          defaultValue={props.user?.store}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="store" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
