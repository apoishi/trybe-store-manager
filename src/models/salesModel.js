const camelize = require('camelize');
const connection = require('./db/connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT
    sp.sale_id , s.date, sp.product_id, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    ORDER BY sp.sale_id, sp.product_id`,
  );
  return camelize(result);
};

const findById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT
    s.date, sp.product_id, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id, sp.product_id`,
    [saleId],
  );
  return camelize(result);
};

const remove = async (saleId) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [saleId],
  );
  return result;
};

module.exports = {
  findAll,
  findById,
  remove,
};
