import User from '#models/user'
import { RegisterValidator } from '#validators/register'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async showRegister({ inertia }: HttpContext) {
    return inertia.render('Auth/register')
  }

  public async register({ request, auth, response }: HttpContext) {
    const payload = await request.validateUsing(RegisterValidator)

    const user = await User.create(payload)

    await auth.use('web').login(user)

    return response.redirect('/menu')
  }

  public async showLogin({ inertia }: HttpContext) {
    return inertia.render('Auth/login')
  }

  public async login({ request, auth, response }: HttpContext) {
    const { phoneNumber, password } = request.only(['phoneNumber', 'password'])

    const user = await User.verifyCredentials(phoneNumber, password)

    await auth.use('web').login(user)

    return response.redirect('/menu')
  }

  public async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
