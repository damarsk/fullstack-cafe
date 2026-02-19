import type { HttpContext } from '@adonisjs/core/http'

export default class ProfilesController {
    public async index({ inertia }: HttpContext) {
        return inertia.render('Profile/index')
    }
}