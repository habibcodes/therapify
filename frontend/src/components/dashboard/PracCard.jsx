import { Box } from "@mui/system";
import { getPractitioners } from "./helpers";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChatIcon from "@mui/icons-material/Chat";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import "./praccard.css";

export default function PractitionerCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [practitioners, setPractitioners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getPractitioners().then((practitioners) => setPractitioners(practitioners));
  }, []);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (index) => {
    // alert(index);
    console.log(index);
    const practitionerObject = practitioners[index];
    if (practitionerObject.expanded) {
      practitionerObject.expanded = false;
    } else {
      practitionerObject.expanded = true;
    }
    const newPractitioners = practitioners;
    newPractitioners[index] = practitionerObject;
    setPractitioners([...newPractitioners]);
    setExpanded(!expanded);
  };

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
        {/* <Grid container spacing={2}> */}
        <div>
          <>
            <TextField
              id="outlined-basic"
              label="Search Practitioners"
              onChange={updateSearchTerm}
              variant="outlined"
            />

            <h1 style={{ color: "#f0f0f0" }}>{searchTerm}</h1>

            {filteredPractitioners.map((practitioner, index) => (
              <Card className="practitioner" style={{ color: "#f0f0f0" }}>
                <CardHeader
                  avatar={
                    // <StyledBadge
                    //   overlap="circular"
                    //   anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    //   variant="dot"
                    //   >
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                      src={practitioner.picture}
                    >
                      {/* {`${practitioner.first_name[0]}${practitioner.last_name[0]}`} */}
                    </Avatar>
                  }
                  title={`${practitioner.first_name} ${practitioner.last_name}`}
                  subheader={`Expertise: ${practitioner.specialty}`}
                />
                {/* </StyledBadge> */}

                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    <EventAvailableIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ChatIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <VideocamIcon />
                  </IconButton>
                  <ExpandMore
                    expand={practitioner.expanded}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={practitioner.expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>

                <Collapse
                  in={practitioner.expanded}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>
                      {practitioner.information}
                    </Typography>
                    <Typography variant="h6" color="Primary" fontWeight="bold">
                      Treatment Approach
                    </Typography>
                    <Typography paragraph>
                      <b>Types of Therapy:</b> {practitioner.treatmenttype}{" "}
                      <br />
                    </Typography>
                    <Typography variant="h6" color="Primary" fontWeight="bold">
                      Client Focus
                    </Typography>
                    <Typography paragraph>
                      <b>Age Group: </b>
                      {practitioner.clientfocus}
                      <br />
                    </Typography>
                    <Typography variant="h6" color="Primary" fontWeight="bold">
                      Finances
                    </Typography>
                    <Typography paragraph>
                      <b>Cost per Session:</b> {practitioner.cost} <br />
                      <b>e-transfer to: </b>
                      {practitioner.email} <br />
                    </Typography>

                    <Typography variant="h6" color="Primary" fontWeight="bold">
                      Qualifications
                    </Typography>
                    <Typography paragraph>
                      <b>School: </b>
                      {practitioner.school} <br />
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            ))}
          </>
        </div>
      </Box>
    </div>
  );
}
