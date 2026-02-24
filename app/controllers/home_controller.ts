import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
    public async index({ inertia }: HttpContext) {
        return inertia.render('Home/index')
    }

    public async menuDetail({ inertia }: HttpContext) {
        return inertia.render('Home/menuDetail')
    }
}