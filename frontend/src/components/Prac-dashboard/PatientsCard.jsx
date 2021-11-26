import { Box } from "@mui/system";
import { getPatients } from "./helpers";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

export default function Card() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getPatients().then((patients) => setPatients(patients));
  }, []);

  function updateSearchTerm(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const filteredPatients = patients.filter((patient) => {
    if (searchTerm === "") return true;
    for (const key in patient) {
      if (
        patient[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  return (
    <div>
      <Box className="clickbox" sx={{ bgcolor: "background.paper" }}>
        <div>
          <>
            <TextField
              id="outlined-basic"
              label="Search Patients"
              onChange={updateSearchTerm}
              variant="outlined"
            />

            <h1 style={{ color: "#f0f0f0" }}>{searchTerm}</h1>
            {filteredPatients.map((patient) => (
              <p className="patient" style={{ color: "#f0f0f0" }}>
                {patient.first_name} {patient.last_name}, age:{patient.age}{" "}
                disease: {patient.disease}
              </p>
            ))}
          </>
        </div>
      </Box>
      <div></div>
    </div>
  );
}
