const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Profile = require("../models/profile");
// const path = require("path")
const multer = require ('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix + '--' + file.originalname)
  }
})

const upload = multer({ storage: storage, limits:{fileSize: 1000000} })

router.get("/allprofile", auth, async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.user.id });
    res.send(profile)
  } catch (error) {
    res.send(error)
  }
});
router.get("/profile/:id", async (req, res) => {
  try {
    const profile = await Profile.find({ user: req.params.id });
    res.send(profile)
  } catch (error) {
    res.send(error)
  }
});
router.post("/addprofile", auth, upload.single('image') ,async (req, res) => {
  try {
    const {dateOfBirth, education, age, name} = req.body;
    const image = req.file.filename
    const newProfile = await Profile.create({
      dateOfBirth,
      education,
      age,
      image,
      name,
      user: req.user.id
    })
    res.send(newProfile);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/delete/:id",auth, async (req,res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).send("Profile not found");
    }
    res.send({ success: "profile has been detleted", profile : profile});
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router;
