import { Box } from "@mui/system";
// import "./singlevid.css";

export default function SingleVid(props) {
  return (
    <iframe
      className="singleVideo"
      id="player"
      type="text/html"
      width="480"
      height="280"
      src={props.src}
      frameBorder="0"
    ></iframe>
  );
}
