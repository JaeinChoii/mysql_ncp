// TODO: 컨트롤러 코드
const { resolveInclude } = require('ejs');
const User = require('../model/User');

exports.index = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signup = (req, res) => {
    User.post_signup(req.body, () => {
        res.send(true); // 회원가입 성공
    });
};

exports.post_signin = (req, res) => {
    User.post_signin(req.body, (result) => {
        console.log('Controller post_signin', result);
        // 유저 조회 o -> 로그인 성공 -> [ {} ]
        if (result.length > 0) {
            res.send(true);
        } else {
        // 유저 조회 x -> 로그인 실패 -> []
            res.send(false);
        }
        res.send(false);
    });
}

exports.post_profile = (req, res) => {
    // console.log(req.body);

    User.post_profile(req.body.userid, (result) => {
        console.log(result); // [ {} ]

        if (result.length > 0) {
            res.render('profile', { data: result[0] });
        }
        // else 절 추가 필요 xxxx
        // POST /user/profile
        // 로그인이 성공되어야만 수행하는 요청
    });
};

exports.edit_profile = (req, res) => {
    User.edit_profile(req.body, () => {
        res.send('Editing done!');
    });
};

exports.delete_profile = (req, res) => {
    User.delete_profile(req.body.id, () => {
        res.send('Your account is deleted!');
    });
};