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
              // <Grid item>
              <Card className="practitioner" style={{ color: "#f0f0f0" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                      {`${practitioner.first_name[0]}${practitioner.last_name[0]}`}
                     
                    </Avatar>
                  }
                  title={`${practitioner.first_name} ${practitioner.last_name}`}
                  subheader={`specialty: ${practitioner.specialty}`}
                />

                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
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
                    <Typography paragraph>{practitioner.first_name}</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
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
