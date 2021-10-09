const express = require('express')
const multer = require('multer')
const GEN_UPLOAD_DOKUMEN = require('../models/gen_upload_dokumen')


//error handler dan respon untuk file mutiple
const resMultiple = ((req, res, next) => {
    const files = req.files;
    console.log("masuk resmultiple")
    // let obj = {}
    if (!files) {
        res.status(400).json({ 'message': 'File can not be empty' });
        return
    } else
    //     // di else ini kita siapin data path nya ke controller, jadi gk perlu proses di controller
    //     for (key in files) {
    //         files[key].forEach((item, index) => {
    //             // if (item.fieldname === "KK") { //jika kita lagi di bagian Kartu Keluarga, maka kita simpan path KK ke object
    //             //     obj["KK"] = item.path //dan ini cara yang kurang efisien
    //             // }
    //             obj[item.fieldname] = item.path // ini paling straight forward
    //             // kita buat property langsung berdasarkan fieldname nya
    //         })
    //     }
    // req.files = obj //kita ubah req.files jadi isi obj nya
    next()
    // res.send(files.KK[0].path)

})



//error handler dan respon untuk file single
const resSingle = ((req, res, next) => {
    const file = req.file;
    if (!file) {
        res.status(400).json({ 'message': 'File can not be empty' });
        return
    } else next()
    // res.send(KTP);    
})


module.exports = {
    resMultiple,
    resSingle
}
