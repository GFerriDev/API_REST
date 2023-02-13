import Sequelize, {Model} from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class User extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          len:{
            args: [3,100],
            msg: 'Campo "nome" deve ter de 3 a 100 caracteres'
        }
      }
    },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'E-mail já registrado'
        },
        validate:{
          isEmail:{
            msg: 'E-mail inválido'
        }
      }
    },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',

    },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate:{
          len:{
            args: [5,55],
            msg: 'A senha precisa ter entre 5 e 55 caractéres'
        }
      }
    }

    },{
      sequelize
    })

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 9)
      }

    })

    return this
  }

  passwordIsValid(password){
    return bcryptjs.compare(password, this.password_hash)
  }
}
