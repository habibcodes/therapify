const getPractitioners = () => {
  // Will eventually use axios... Faking it for now.
  // return axios.get("/api/practitioners");

  return new Promise((resolve, reject) => {
    const practitioners = [
      { name: "Dr. Alpha", email: "alpha@doctor.com", specialty: "Depression" },
      { name: "Dr. Beta", email: "beta@doctor.com", specialty: "PTSD" },
      {
        name: "Dr. Charlie",
        email: "charlie@doctor.com",
        specialty: "Anxiety",
      },
      {
        name: "Dr. Delta",
        email: "delta@doctor.com",
        specialty: "Depression",
        age: 27,
      },
      { name: "Dr. Echo", email: "echo@doctor.com", specialty: "Anxiety" },
      {
        name: "Dr. Foxtrot",
        email: "foxtrot@doctor.com",
        specialty: "Anxiety",
      },
    ];
    resolve(practitioners);
  });
}

module.exports = { getPractitioners }