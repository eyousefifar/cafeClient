import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "../../../../custom/typography";
import useStyles from "./style";

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.information}>
      <Grid direction="column" justify="center" alignItems="center" container>
        {/* <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          <Grid item>
            <Typography variant="caption">ساعت کاری : </Typography>
          </Grid>
        </Grid> */}
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          <Grid item>
            <Typography variant="caption">شنبه تا پنج شنبه</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">24:00 - 08:00</Typography>
          </Grid>
        </Grid>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          <Grid item>
            <Typography variant="caption">جمعه و ایام تعطیل</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">24:00 - 15:00</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <div className={classes.boxAddress}>
        <Typography variant="caption">
          {"آدرس : قم نبش میدان جانبازان (صفاییه) کافه چی"}
        </Typography>
      </div>
    </div>
  );
};

export default Error;
