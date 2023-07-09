/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn, hasRole } = useAuth()
  const isSeller = hasRole('SELLER')
  console.log("You're a Seller", isSeller)
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="flex min-h-screen items-center justify-center">
          <div className="card w-96 bg-base-300">
            <div className="card-body">
              <div className="card-title">Login</div>
              <Form onSubmit={onSubmit} className="mt-3">
                <label className="label">
                  <Label
                    name="username"
                    className="label-text"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                </label>
                <TextField
                  name="username"
                  className="input-bordered input w-full max-w-xs"
                  errorClassName="input input-bordered input-error w-full max-w-xs"
                  ref={usernameRef}
                  validation={{
                    required: {
                      value: true,
                      message: 'Username is required',
                    },
                  }}
                />

                <FieldError name="username" className="rw-field-error" />

                <label className="label">
                  <Label
                    name="password"
                    className="label-text"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                </label>
                <PasswordField
                  name="password"
                  className="input-bordered input w-full max-w-xs"
                  errorClassName="input input-bordered input-error w-full max-w-xs"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                />

                <div className="rw-forgot-link">
                  <Link to={routes.forgotPassword()} className="rw-forgot-link">
                    Forgot Password?
                  </Link>
                </div>

                <FieldError name="password" className="rw-field-error" />
                <div className="rw-login-link">
                  <span>Don&apos;t have an account?</span>{' '}
                  <Link to={routes.signup()} className="rw-link">
                    Sign up!
                  </Link>
                </div>
                <div className="rw-button-group">
                  <Submit className="btn-primary btn">Login</Submit>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
