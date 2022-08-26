import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import memories from "./Media/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import useStyles from "./Styles";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar
        className={classes.appBar}
        sx={{
          flexDirection: "row",
        }}
        position="static"
        color="inherit"
      >
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="logo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
