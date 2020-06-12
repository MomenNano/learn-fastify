const mongoose = require('mongoose')
const multer = require('fastify-multer')
const path = require('path')

const User = require('../../database/schema/user')

async function registerHandler (req, res) {
  try {
    console.log('hereeeeeeeee', req.file)
    const user = await User.create({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      password: req.body.password,
      email: req.body.email
    })

    console.log(user)
    return user
  } catch (error) {
    console.log(error)
  }
}

// Multer configration
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../uploads/'),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  }
})

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5000000 },
//   fileFilter: (req, file, cb) => {
//     checkFileType(file, cb)
//   }
// })

const upload = multer({ storage: storage })

function checkFileType (file, cb) {
  const fileTypes = /jpeg|jpg|png/

  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())

  const mimeType = fileTypes.test(file.mimetype)

  if (extName && mimeType) {
    return cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = {
  registerHandler,
  upload
}
