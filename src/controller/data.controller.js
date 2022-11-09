import { pool } from "../config/database.config.js";
pool.connect;

export const createData = async (req, _rep) => {
  const { name, description, nbWatt, locationName, type } = JSON.parse(
    req.body
  );

  try {
    await pool.query(
      `INSERT INTO data (name, description, nb_watt, location_name, type) VALUES ($1, $2, $3, $4, $5)`,
      [name, description, nbWatt, locationName, type]
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

export const getDatas = async () => {
  try {
    let result = await pool.query(`SELECT * FROM data`);
    return result.rows;
  } catch (err) {
    console.log(
      "🚀 ~ file: data.controller.js ~ line 24 ~ getDatas ~ err",
      err
    );
  }
};
