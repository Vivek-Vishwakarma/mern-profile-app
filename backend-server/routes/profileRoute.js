const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Profile = require("../models/profile");
const multer = require ('multer');

const storageEngine = multer.diskStorage ({
  destination: './public/uploads/',
  filename: function (req, file, callback) {
    callback (
      null,
      file.fieldname + '-' + Date.now () + path.extname (file.originalname)
    );
  },
});
const fileFilter = (req, file, callback) => {
  let pattern = /jpg|png|svg/; // reqex

  if (pattern.test (path.extname (file.originalname))) {
    callback (null, true);
  } else {
    callback ('Error: not a valid file');
  }
};

// initialize multer
const upload = multer ({
storage: storageEngine,
fileFilter: fileFilter,
});

router.get("/allprofile", auth, async (req, res) => {
  const profile = await Profile.find({ user: req.user.id });
  res.send(profile);
});
router.post("/addprofile", auth, upload.single('uploadedFile') ,async (req, res) => {
  try {
    const { image, dateOfBirth, education, age } = req.body;
    const newProfile = new Profile({
      // image : req.file,
      image,
      dateOfBirth,
      education,
      age,
      user: req.user.id,
    });
    const saveProfile = await newProfile.save();
    res.json(saveProfile);
  } catch (error) {
    res.send("sometging wrong in profile");
  }
});

module.exports = router;
