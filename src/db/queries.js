const pool = require('./dbConfig');

const getTests = async () => {

    try {
        const tests = await pool.query('SELECT * FROM test');
        console.log(tests);
        return tests.rows;
      } catch (error) {
        console.error('쿼리 실행 오류:', error);
        throw error;
      }
};


module.exports = {
    getTests
};