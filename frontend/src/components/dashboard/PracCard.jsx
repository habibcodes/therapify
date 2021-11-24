import { Box } from "@mui/system";
import { getPractitioners } from "./helpers";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
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
    <div>
      <Box className="clickbox" sx={{ bgcolor: "background.paper" }}>
        <div>
          List of Practitioners go here
          <>
            <h1 style={{ color: "#f0f0f0" }}>Practitioners</h1>
            <input onChange={updateSearchTerm}></input>
            <h1 style={{ color: "#f0f0f0" }}>{searchTerm}</h1>
            {filteredPractitioners.map((practitioner) => (
              <p style={{ color: "#f0f0f0" }}>{JSON.stringify(practitioner)}</p>
            ))}
          </>
        </div>
      </Box>
      <div></div>
    </div>
  );
}
