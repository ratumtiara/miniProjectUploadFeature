//cek data user yg mau daftar dan login itu sesuai apa engga

//ngecek yang didaftar udah sesuai format emailnya nama dan digit password
const daftar = (req, res, next) => {
    const { nama, email, password } = req.body
    if (!nama || !email || !password) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    } else if (typeof nama !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        next(({ name: "UNPROCESSABLE_DATA" }))
    } else {
        const cekAt = email.includes('@')
        const cekDot = email.includes('.')
        if (!cekAt || !cekDot) {
            next({
                name: "UNPROCESSABLE_DATA",
                custom: "Email not valid format"
            })
        } else if (password.length < 3) { //dibuat 3 karna suka bikin password 123 he he
            next({
                name: "UNPROCESSABLE_DATA",
                custom: "Password is too short ,add character until minimum 3 characters"
            })
        } else {
            next()
        }
    }
}

//ngecek akun yang masuk tipe data string untuk password dan email
const masuk = (req, res, next) => {
    const { password, email } = req.body
    if (!password || !email) {
        next({
            name: "REQUIRED_DATA_NOT_FOUND",
            custom: "jangan dikosongin datanya ya"
        })
    } else if (typeof password !== 'string' || typeof email !== 'string') {
        next({
            name: "UNPROCESSABLE_DATA",
            custom: "not invalid format"
        })
    } else {
        next()
    }
}

//ngecek id pada id 
const checkId = (req, res, next) => {
    if (!req.params.id) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    } else if (typeof req.params.id !== "string") {
        next({ name: "UNPROCESSABLE_DATA" })
    } else {
        next()
    }
}

module.exports = {
    daftar,
    masuk,
    checkId
}