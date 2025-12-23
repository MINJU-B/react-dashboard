
//https://d0u0b.tistory.com/entry/React-React생성부터-Nodejs-연동까지-5-DB-연동

const { Pool } = require('pg');

const pool = new Pool({
  user: 'katech',
  host: '10.10.17.10',
  database: 'postgres',	// 기본은 postgres
  password: 'katech',
  port: 5432, // PostgreSQL 기본 포트
});


pool.connect(err => {
    if(err) console.log('DB 연결 실패: ', err);
    else console.log('성공');
});
module.exports = pool;
