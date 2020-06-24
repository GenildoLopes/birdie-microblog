'use strict'

const { RouteGroup } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Index

// User Routes
Route.post('/register-store', 'AuthController.postRegister').as('register.store').validator('Register')
Route.get('/login', 'AuthController.loginView').as('login.create')
Route.post('/login-store', 'AuthController.postLogin').as('login.store')
Route.get('/post-view/:id', 'PostController.show').as('view.post')

// Post Routes
Route.group(()=>{
    Route.post('/store-post', 'PostController.store').as('store.post')
    Route.post('/update-post/:id', 'PostController.update').as('update.post')
    Route.get('/delete-post/:id', 'PostController.destroy').as('delete.post')
    Route.post('/logout', 'AuthController.logout').as('logout')
}).middleware(['auth'])

