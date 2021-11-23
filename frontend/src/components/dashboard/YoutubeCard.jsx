import { Box } from "@mui/system";

export default function Card() {
  return (
    <div>
      <Box className="clickbox" sx={{ bgcolor: "background.paper" }}>
        <div>Youtube session</div>
        <div class="container">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="search" />
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-danger" value="Search" />
            </div>
          </form>
        </div>
      </Box>
      <div></div>
    </div>
  );
}
