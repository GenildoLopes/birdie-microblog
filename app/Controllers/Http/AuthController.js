'use strict'

const User = use('App/Models/User')

class AuthController {

    loginView({ view }) {
        return view.render('auth.login')
    }
    registrationView({ view }) {
        return view.render('auth.register')
    }

    async postLogin({ request, auth, response}) {
        await auth.attempt(request.input('email'), request.input('password'))
        return response.route('index')
    }

    async postRegister({ request, session, response}) {

        const user = await User.create({
            username: request.input('name'),
            email: request.input('email'),
            password: request.input('password')
        })
        session.flash({ successMessage: 'Perfil Criado com sucesso'})
        return response.route('login.create')
    }

    async logout({}) {
        await auth.logout()
        return response.route('/')
    }

}

module.exports = AuthController










