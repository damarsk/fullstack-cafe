/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const HomeController = () => import('#controllers/home_controller')
// const CartController = () => import('#controllers/carts_controller')
// const ProfileController = () => import('#controllers/profiles_controller')
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router.get('/login', [AuthController, 'showLogin']).as('login')
    router.post('/login', [AuthController, 'login'])
    router.get('/register', [AuthController, 'showRegister']).as('register')
    router.post('/register', [AuthController, 'register'])
  })
  .use([middleware.guest()])

router
  .group(() => {
    router.get('/menu', [HomeController, 'index']).as('home')
    // router.get('/cart', [CartController, 'index']).as('cart')
    // router.get('/profile', [ProfileController, 'index']).as('profile')
    router.post('/logout', [AuthController, 'logout']).as('logout')
  })
  .use([middleware.authCookie(), middleware.auth()])
