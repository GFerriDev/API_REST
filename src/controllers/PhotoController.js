import multer from 'multer';
import multerConfig from '../config/multer'

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('arquivo')


class PhotoController{
   store(req,res){
    return upload(req, res, async (err) =>{
      if(err){
        return res.status(400).json('Arquivo em formato não aceitável')
      }

      try{
        const {originalname, filename} = req.file
        const {aluno_id} = req.body
        const photo = await Photo.create({originalname, filename, aluno_id})

        return res.json(photo)

      } catch(e){

        return res.status(400).json('Aluno não existe')
      }

    })
  }
}

export default new PhotoController()
