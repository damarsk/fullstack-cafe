import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AuthCookieMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const token = ctx.request.cookie('token')

    if (token) {
      ctx.request.request.headers.authorization = `Bearer ${token}`
    }

    await next()
  }
}
