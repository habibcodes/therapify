import { Box } from "@mui/system";

export default function SingleVid(props) {
  return (
    <iframe
      id="player"
      type="text/html"
      width="640"
      height="390"
      src={props.link}
      frameborder="0"
    ></iframe>
  );
}
