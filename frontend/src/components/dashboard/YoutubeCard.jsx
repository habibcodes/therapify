import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const onSearchChanged = (event) => {
    const _title = event.target.value;
    console.log(_title);
    setSearch(_title);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("search value 11111----->", search);
    const test = axios
      .get(`/api/youtube`, { params: { search: search } })
      .then((res) => {
        setSearchResults(res.data.videos);
      });
    console.log("search value----->", search);
    console.log("test---->", test);
  };

  return (
    <div>
      <Box className="clickbox" sx={{ bgcolor: "background.paper" }}>
        <div>
          <form onSubmit={onSubmit}>
            <div class="form-controls">
              <label>Search</label>
              <input
                onChange={onSearchChanged}
                id="video-search"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
          </form>
        </div>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          frameborder="0"
        ></iframe>
        <div></div>
      </Box>
      <div></div>
    </div>
  );
}
