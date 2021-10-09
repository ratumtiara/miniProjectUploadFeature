const router = require('express').Router()
const uploadDocs = require('../middleware/uploadDocs')
const multer = require('multer')
const uploadDocsController = require('../controller/Upload Document/uploadDocsController')

//-----------------------------------MULTIPLE
const diskupload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/Multiple');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const upload = multer({ storage: diskupload });

// router.post('/uploadMultiple/:user',(req,res)=>res.send("masuk"))

router.post('/uploadMultiple/:user', upload.fields
    ([
        { name: 'KTP', maxCount: 1 },
        { name: 'KK', maxCount: 1 },
        { name: 'SuratNikah', maxCount: 1 },
        { name: 'NPWP', maxCount: 1 },
        { name: 'SlipGaji', maxCount: 1 },
        { name: 'KetKerja', maxCount: 1 },
        { name: 'MutasiRek', maxCount: 1 },
        { name: 'LapKeuangan', maxCount: 1 },
        { name: 'SertifBangunan', maxCount: 1 },
        { name: 'IMB', maxCount: 1 },
        { name: 'PBB', maxCount: 1 }
    ]), 
    // (req, res, next) => {
    //      res.send(req.files)
    //     console.log(req.files)}
    uploadDocs.resMultiple, 
    uploadDocsController.addPathMultiple
)

























//------------------------------------SINGLE

const multerKTP = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/KTP');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadKTP = multer({ storage: multerKTP });


const multerKK = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/KK');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadKK = multer({ storage: multerKK });


const multerSuratNikah = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/SuratNikah');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadSuratNikah = multer({ storage: multerSuratNikah });

const multerNPWP = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/NPWP');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadNPWP = multer({ storage: multerNPWP });

const multerSlipGaji = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/SlipGaji');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadSlipGaji = multer({ storage: multerSlipGaji });


const multerKetKerja = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/KetKerja');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadKetKerja = multer({ storage: multerKetKerja });


const multerMutasiRek = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/MutasiRek');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadMutasiRek = multer({ storage: multerMutasiRek });

const multerLapKeuangan = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/LapKeuangan');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadLapKeuangan = multer({ storage: multerLapKeuangan });


const multerSertif = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/SertifBangunan');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadSertifBangunan = multer({ storage: multerSertif });


const multerIMB = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/IMB');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadIMB = multer({ storage: multerIMB });


const multerPBB = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/PBB');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadPBB = multer({ storage: multerPBB });



//KTP
router.post('/uploadKTP', uploadKTP.single('KTP'), uploadDocs.resSingle, uploadDocsController.addPathKTP)//uploadDocs.input
// router.get('/uploadKTP', (req,res)=> {res.send("ok")})
//KK
router.post('/uploadKK', uploadKK.single('KK'), uploadDocs.resSingle)
//Surat Nikah
router.post('/uploadSuratNikah', uploadSuratNikah.single('SuratNikah'), uploadDocs.resSingle)
//NPWP
router.post('/uploadNPWP', uploadNPWP.single('NPWP'), uploadDocs.resSingle)
//Slip Gaji Asli
router.post('/uploadSlipGaji', uploadSlipGaji.single('SlipGaji'), uploadDocs.resSingle)
//Keterangan Kerja
router.post('/uploadKetKerja', uploadKetKerja.single('KetKerja'), uploadDocs.resSingle)
//mutasi rekening
router.post('/uploadMutasiRek', uploadMutasiRek.single('MutasiRek'), uploadDocs.resSingle)
//Laporan Keuangan atau Usaha
router.post('/uploadLapKeuangan', uploadLapKeuangan.single('LapKeuangan'), uploadDocs.resSingle)
//Sertifikat bangunan
router.post('/uploadSertif', uploadSertifBangunan.single('SertifBangunan'), uploadDocs.resSingle)
//IMB
router.post('/uploadIMB', uploadIMB.single('IMB'), uploadDocs.resSingle)
//PBB
router.post('/uploadPBB', uploadPBB.single('PBB'), uploadDocs.resSingle)


module.exports = router