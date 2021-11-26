import { Box } from "@mui/system";
import "./singlevid.css";

export default function SingleVid(props) {
  return (
    <iframe
      className="singleVideo"
      id="player"
      type="text/html"
      // width="640"
      // height="390"
      // style={{ padding-right: 5px }}
      src={props.src}
      frameBorder="0"
    ></iframe>
  );
}
