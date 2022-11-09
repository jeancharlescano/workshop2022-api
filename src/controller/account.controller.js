import { pool } from "../config/database.config.js";
pool.connect;

export const createAccount = async (req, _rep) => {
  const { email, password, number } = JSON.parse(req.body);

  try {
    await pool.query(
      `INSERT INTO account (email, passwd, number) VALUES ($1, $2, $3)`,
      [email, password, number]
    );
    const result = "inserted";
    return result;
  } catch (error) {
    console.log(
      "🚀 ~ file: data.controller.js ~ line 15 ~ createData ~ error",
      error
    );
  }
};

export const getAccounts = async () => {
  try {
    let result = await pool.query(`SELECT id, email, number FROM account`);
    return result.rows;
  } catch (err) {
    console.log(
      "🚀 ~ file: data.controller.js ~ line 24 ~ getDatas ~ err",
      err
    );
  }
};
