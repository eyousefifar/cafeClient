import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    homeBackground: {
      width: "100vw",
      minHeight: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      backgroundImage: "url(../../../static/images/caffe.jpeg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      backgroundPosition: "center",
      overflow: "auto"
    }
  })
);

export default useStyles;
