import type { HttpContext } from '@adonisjs/core/http'

export default class MenuController {
  public async index({ inertia }: HttpContext) {
    return inertia.render('home', {
      title: 'Cafe Menu',
    })
  }
}
