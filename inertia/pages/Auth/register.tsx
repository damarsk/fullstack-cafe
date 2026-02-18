import React from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import BlankLayout from '@/layouts/blankLayout'

const Register = () => {
  const { data, setData, post, processing, errors } = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    password_confirmation: '',
  })

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    post('/register')
  }

  return (
    <>
      <Head title="Register" />

      <main className="min-h-screen flex items-center justify-center">
        <section className="w-full max-w-md">
          <form
            onSubmit={handleRegister}
            className="rounded-2xl p-8 space-y-4"
          >
            <h1 className="text-2xl font-bold text-center">Register</h1>

            <input
              type="text"
              placeholder="Full name"
              value={data.fullName}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('fullName', e.target.value)}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

            <input
              type="email"
              placeholder="Email"
              value={data.email}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('email', e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="text"
              placeholder="Phone number"
              value={data.phoneNumber}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('phoneNumber', e.target.value)}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

            <input
              type="password"
              placeholder="Password"
              value={data.password}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('password', e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <input
              type="password"
              placeholder="Password confirmation"
              value={data.password_confirmation}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('password_confirmation', e.target.value)}
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-sm">{errors.password_confirmation}</p>
            )}

            <Button type="submit" className="w-full" disabled={processing}>
              {processing ? 'Registering...' : 'Register'}
            </Button>

            <p className="text-center text-sm">
              Sudah punya akun?{' '}
              <Link href="/login" className="text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Login disini
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  )
}

Register.layout = (page: React.ReactNode) => <BlankLayout children={page} />

export default Register
