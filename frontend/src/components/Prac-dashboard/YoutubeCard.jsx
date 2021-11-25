import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";
import SingleVid from "./SingleVid";

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
    axios.get(`/api/youtube`, { params: { search: search } }).then((res) => {
      setSearchResults(res.data.videos);
      console.log("test---->", res.data.videos);
    });
  };

  const filteredVideos = searchResults.map((searchResult) => (
    <SingleVid src={searchResult} key={searchResult} />
  ));

  return (
    <div>
      <Box className="clickbox" sx={{ bgcolor: "background.paper" }}>
        <div>
          <form onSubmit={onSubmit}>
            <div className="form-controls">
              <TextField
                id="outlined-basic"
                label="Search Videos"
                onChange={onSearchChanged}
                variant="outlined"
              />
            </div>
          </form>
        </div>
        <br />
        <div>{filteredVideos}</div>

        <div></div>
      </Box>
      <div></div>
    </div>
  );
}