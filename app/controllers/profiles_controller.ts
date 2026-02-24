import type { HttpContext } from '@adonisjs/core/http'

export default class ProfilesController {
    public async index({ inertia }: HttpContext) {
        return inertia.render('Profile/index')
    }

    public async changePassword({ inertia }: HttpContext) {
        return inertia.render('Profile/changePassword')
    }

    public async history({ inertia }: HttpContext) {
        return inertia.render('Profile/history')
    }

    public async edit({ inertia }: HttpContext) {
        return inertia.render('Profile/edit')
    }
}