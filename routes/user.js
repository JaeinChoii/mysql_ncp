// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.index);

// GET /user/signup
router.get('/signup', controller.signup);
// POST /user/signup
router.post('/signup', controller.post_signup);

// GET /user/signin
router.get('/signin', controller.signin);
// POST /user/signin
router.post('/signin', controller.post_signin);

// POST /user/profile
router.post('/profile', controller.post_profile);

// POST /user/proifle/edit
router.post('/profile/edit', controller.edit_profile);

router.post('/profile/delete', controller.delete_profile);


module.exports = router;