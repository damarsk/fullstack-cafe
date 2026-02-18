import User from '#models/user'
import { RegisterValidator } from '#validators/register'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async showRegister({ inertia }: HttpContext) {
    return inertia.render('Auth/register')
  }

  public async register({ request, response, inertia }: HttpContext) {
    const payload = await request.validateUsing(RegisterValidator)
    const user = await User.create(payload)
    const token = await User.accessTokens.create(user)

    response.cookie('token', token.value!.release(), {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    })

    return inertia.render('Auth/login', {
      status: 'success',
      message: 'User registered successfully',
    })
  }

  public async showLogin({ inertia }: HttpContext) {
    return inertia.render('Auth/login')
  }

  public async login({ request, response, inertia }: HttpContext) {
    const { phoneNumber, password } = request.only(['phoneNumber', 'password'])
    const user = await User.verifyCredentials(phoneNumber, password)
    const token = await User.accessTokens.create(user)

    response.cookie('token', token.value!.release(), {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    })

    return inertia.render('Home/index', {
      status: 'success',
      user,
    })
  }

  public async logout({ auth, response, inertia }: HttpContext) {
    await auth.use('web').logout()
    response.clearCookie('token')

    return inertia.render('Auth/login', {
      status: 'success',
      message: 'Logged out successfully',
    })
  }
}
