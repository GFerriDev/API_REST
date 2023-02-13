import Sequelize, {Model} from 'sequelize'

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,99],
            msg: 'Nome precisa ter entre 3 e 99 caractéres'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3,99],
            msg: 'Sobrenome precisa ter entre 3 e 99 caractéres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail inválido'
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Digite um número inteiro'
          }
        }

      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Digite um valor válido'
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Digite um valor válido'
          }
        }
      }

    },{
      sequelize
    })
    return this
  }

  static associate(models){
    this.hasMany(models.Photo, {foreignKey: 'aluno_id'})
  }
}
