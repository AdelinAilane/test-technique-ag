const { Pool } = require('pg');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('#################################################');
console.log('##### POSTGRES Database connection required #####');
console.log('#################################################\n');

const init = async (client) => {
  try {
    await client.query('BEGIN');
    console.log('### creating db, using schema of sql/_schema.sql');

    const fileRead = fs.readFileSync('sql/schema.sql', 'utf8').toString();
    await client.query(fileRead.replaceAll('{user}', client.user));

    await client.query('COMMIT');
    console.log('\n#### Database created 🎉');
    process.exit(0);
  } catch (e) {
    await client.query('ROLLBACK');
    console.log('\n####Script failed 👎');
    console.log(`[${e.code || ''} - ${e.severity || ''}] ${e.routine || ''} ${e.message || ''}`);
    process.exit(0);
  } finally {
    client.release();
  }
};

const connect = async (pool) => {
  try {
    const client = await pool.connect();
    await init(client);
  } catch (e) {
    console.log('\n####Connection failed 👎');
    console.log(`[${e.code || ''} - ${e.severity || ''}] ${e.routine || ''} ${e.message || ''}`);
    process.exit(0);
  }
};

rl.question('host [localhost]: ', (host) => {
  rl.question('port [5432]: ', (port) => {
    rl.question('database [ag_db]: ', (database) => {
      rl.question('user [ag_db]: ', (user) => {
        rl.question('password [ag_db_pwd]: ', (password) => {
          const config = {
            host: host || 'localhost',
            database: database || 'ag_db',
            port: port || '5432',
            user: user || 'ag_db',
            password: password || 'ag_db_pwd',
          };
          console.log(config);
          const pool = new Pool(config);
          console.log(`\nConnection... psql -p ${config.port} -h ${config.host} -U ${config.user} -d ${config.database}`);
          connect(pool);
          rl.close();
        });
      });
    });
  });
});
