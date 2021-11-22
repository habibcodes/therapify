import { useState, useEffect } from "react";
import axios from "axios";

export default function PractitionerList() {
  const [practitioners, setPractitioners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getPractitioners().then((practitioners) => setPractitioners(practitioners));
  }, []);

  function updateSearchTerm(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const filteredPractitioners = practitioners.filter((practitioner) => {
    if (searchTerm === "") return true;
    for (const key in practitioner) {
      if (
        practitioner[key]
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  return (
    <>
      <h1 style={{ color: "#f0f0f0" }}>Practitioners</h1>
      <input onChange={updateSearchTerm}></input>
      <h1 style={{ color: "#f0f0f0" }}>{searchTerm}</h1>
      {filteredPractitioners.map((practitioner) => (
        <p style={{ color: "#f0f0f0" }}>{JSON.stringify(practitioner)}</p>
      ))}
    </>
  );
}

function getPractitioners() {
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
