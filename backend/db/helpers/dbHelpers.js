module.exports = (db) => {
  const getPractitioners = (email) => {
    const query = {
      text: `SELECT practitioners.id, first_name, last_name, email, specialty FROM users JOIN practitioners ON users.id = user_id`,
    };
    console.log(query);

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getPatients = (email) => {
    const query = {
      text: `SELECT patients.id, first_name, last_name, age, disease FROM users JOIN patients ON users.id = user_id`,
    };
    console.log(query);

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

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

  const setAppointments = (appointment) => {
    console.log('appointment = ', appointment)
    const query = {
      text: `INSERT into appointments(title, practitioner_id, start_date, end_date )
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      values: [appointment.title, appointment.ownerId, appointment.startDate, appointment.endDate]
    }
    console.log('query = ', query)
    return db
    .query(query)
    .then((result) => result.rows)
    .catch((err) => err);
  }
  return {
    getAppointments,
    getPatients,
    getPractitioners,
    setAppointments
  };
};
