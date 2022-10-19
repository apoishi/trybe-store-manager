const snakeize = require('snakeize');
const connection = require('./db/connection');
// const camelize = require('camelize');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [productId],
  );
  return result;
};

const insert = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );

  return insertId;
};

const updateById = async (productId, dataToUpdate) => {
  const formattedColumns = Object.keys(snakeize(dataToUpdate))
    .map((key) => `${key} = ?`)
    .join(', ');

  return connection.execute(
    `UPDATE travels SET ${formattedColumns} WHERE id = ?`,
    [...Object.values(dataToUpdate), productId],
  );
};
  
module.exports = {
  findAll,
  findById,
  insert,
  updateById,
};