import { Box } from "@mui/system";
import { useState } from "react";
import axios from "axios";

export default function Card() {
  const [search, setSearch] = useState("");
  const onSearchChanged = (event) => {
    const _title = event.target.value;
    console.log(_title);
    setSearch(search);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const test = axios.get(`/api/youtubevideo`, { params: { search: search } });
    console.log(test);
  };

  return (
    <div>
      <Box className="clickbox" sx={{ bgcolor: "background.paper" }}>
        <div>
          <form onSubmit={onSubmit}>
            <div class="form-controls">
              <label>Search</label>
              <input
                // value={state.title}
                onChange={onSearchChanged}
                id="video-search"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
          </form>
        </div>
      </Box>
      <div></div>
    </div>
  );
}
