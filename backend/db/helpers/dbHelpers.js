module.exports = (db) => {
  const getPractitioners = (email) => {
    const query = {
      text: `SELECT first_name, last_name, email, specialty FROM users JOIN practitioners ON users.id = user_id`,
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

module.exports = (db) => {
  const getAppointments = (email) => {
    const query = {
      text: `SELECT * FROM appointments`,
    };
    console.log(query);

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getAppointments,
  };
};
