// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '0738',
    database: 'practice',
});

exports.post_signup = (data, cb) => {
    const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}');`
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log(rows);
        cb();
    });
};

exports.post_signin = (data, cb) => {
    const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }

        console.log(rows);
        cb(rows);
    });
};

exports.post_profile = (id, cb) => {
    const sql = `SELECT * FROM user WHERE userid='${id}' LIMIT 1`;
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }

        console.log(rows); // [ {} ]
        cb(rows);
    });
};

exports.edit_profile = (data, cb) => {
    const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        
        console.log(rows);
        cb();
    });
};

exports.delete_profile = (id, cb) => {
    const sql = `DELETE FROM user WHERE id=${id}`

    conn.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        
        console.log(rows);
        cb();
    });
};
