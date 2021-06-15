import useStyles from "../style";
import Grid from "@material-ui/core/Grid";

import InfoBox from "../components/information";
import ListBox from "../components/listBox";

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeBackground}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <ListBox />
          <InfoBox />
        </Grid>
      </div>
    </div>
  );
};

export default Error;
