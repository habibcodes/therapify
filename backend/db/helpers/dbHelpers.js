module.exports = (db) => {
  const getPractitioners = (email) => {
    const query = {
      text: `SELECT * FROM users`,
    };
    console.log(query);

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getPractitioners,
  };
};
