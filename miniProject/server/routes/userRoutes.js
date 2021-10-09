const router = require('express').Router()
const userController = require('../controller/Data User/UserController')
const validator = require('../middleware/userValidator')
const auth = require('../middleware/auth')

// router.post('/daftar', userController.daftar)
router.get('/getOne/:id', userController.getOne) //bisaa cek lewat headers Authorization
router.post('/daftar', userController.daftar)
router.post('/masuk', userController.masuk)
router.post('/masukMobile', userController.masukMobile)
// router.get('/getAll', auth, userController.getAll)                         //alhamdulilaaaaah bisaa cek lewat headers Authorization
router.get('/getAll', userController.getAll)                         //alhamdulilaaaaah bisaa cek lewat headers Authorization
// router.get('/getOne/:id', auth, validator.checkId, userController.getOne) //bisaa cek lewat headers Authorization
router.put('/update/:id', auth, validator.checkId, userController.update) //bisaa cek lewat headers Authorization
router.delete('/delete/:id', auth, validator.checkId, userController.delete) //bisaa cek lewat headers Authorization

module.exports = router