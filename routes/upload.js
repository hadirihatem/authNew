const router=require('express').Router()
const uploadImage =require('../middelware/uploadImage')
const uploadCtrl=require('../controller/uploadCtrl')
const auth=require('../middelware/auth')


router.post('/upload_avatar',auth,uploadImage,uploadCtrl.uploadAvatar)

module.exports=router 