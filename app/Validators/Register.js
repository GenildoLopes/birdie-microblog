'use strict'

class Register {
  get rules () {
    return {
      // validation rules
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|min:8'
    }
  }

  get messages () {
    return {
      // Messages
      'name.required': 'O nome é obrigatório',
      'email.required' : 'Email é necessário',
      'email.unique' : 'Já existe uma conta com esse email ',
      'password.required' : 'Senha obrigatória',
      'password.min' : 'A senha precisa ter no mínimo 8 caratéres'
    }
  }
}

module.exports = Register
