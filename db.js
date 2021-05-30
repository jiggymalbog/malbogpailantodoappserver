const Pool = require("pg").Pool;

const pool = new Pool({
    user: "qgqwdicupxnoaq",
    password: "d7069f486e6e9a6ec2c756326b69aeb50ea599afaa369741167f5cad56709ded",
    host: "ec2-34-230-115-172.compute-1.amazonaws.com",
    port: 5432,
    database: "ddbfh3pouo0hia",
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;