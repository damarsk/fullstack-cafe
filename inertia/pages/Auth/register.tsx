import React, { useState } from 'react'
import { Head, Link, useForm } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import BlankLayout from '@/layouts/blankLayout'
import { Eye, EyeOff } from 'lucide-react'

const Register = () => {
  const { data, setData, post, processing, errors } = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    password_confirmation: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordMatchError, setPasswordMatchError] = useState('')

  const handlePasswordConfirmChange = (value: string) => {
    setData('password_confirmation', value)
    if (data.password && value && data.password !== value) {
      setPasswordMatchError('Password tidak cocok.')
    } else {
      setPasswordMatchError('')
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    if (data.password !== data.password_confirmation) {
      setPasswordMatchError('Password tidak cocok.')
      return
    }

    post('/register')
  }

  return (
    <>
      <Head title="Register" />

      <main className="min-h-screen flex items-center justify-center">
        <section className="w-full max-w-md">
          <form onSubmit={handleRegister} className="rounded-2xl p-8 space-y-4">
            <h1 className="text-2xl font-bold text-center">Register</h1>

            <input
              type="text"
              placeholder="Full name"
              value={data.fullName}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('fullName', e.target.value)}
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

            <input
              type="email"
              placeholder="Email"
              value={data.email}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('email', e.target.value)}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="text"
              placeholder="Phone number"
              value={data.phoneNumber}
              className="w-full px-4 py-3 border rounded-lg"
              onChange={(e) => setData('phoneNumber', e.target.value)}
              required
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={data.password}
                className="w-full px-4 py-3 border rounded-lg pr-12"
                onChange={(e) => setData('password', e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-enter password"
                value={data.password_confirmation}
                className={`w-full px-4 py-3 border rounded-lg pr-12 ${
                  passwordMatchError ? 'border-red-500' : ''
                }`}
                onChange={(e) => handlePasswordConfirmChange(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {(passwordMatchError || errors.password_confirmation) && (
              <p className="text-red-500 text-sm">
                {passwordMatchError || errors.password_confirmation}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={processing}>
              {processing ? 'Registering...' : 'Register'}
            </Button>

            <p className="text-center text-sm">
              Sudah punya akun?{' '}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
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