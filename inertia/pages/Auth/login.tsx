import React from 'react'
import { Head, useForm, Link } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import BlankLayout from '@/layouts/blankLayout'

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    phoneNumber: '',
    password: '',
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    post('/login')
  }

  return (
    <>
      <Head title="Login" />

      <main className="min-h-screen flex items-center justify-center">
        <section className="w-full max-w-md">
          <form
            onSubmit={handleLogin}
            className="rounded-2xl p-8 space-y-4"
          >
            <h1 className="text-2xl font-bold text-center">Login</h1>

            <input
              type="text"
              placeholder="Phone number"
              value={data.phoneNumber}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('phoneNumber', e.target.value)}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              value={data.password}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('password', e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            <Button type="submit" className="w-full" disabled={processing}>
              {processing ? 'Logging in...' : 'Login'}
            </Button>

            <p className="text-center text-sm">
              Belum punya akun?{' '}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Register disini
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  )
}

Login.layout = (page: React.ReactNode) => <BlankLayout children={page} />

export default Login
