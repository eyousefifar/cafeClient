import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Primary } from "../../../color";

const useStyles = makeStyles(
  createStyles({
    header: {
      display: "flex",
      justifyContent: "space-between",
      // padding: 8,
      paddingRight: "8px",
      position: "relative",
      zIndex: 100
    },
    PrimaryHeader: {
      display: "flex",
      justifyContent: "space-between",
      padding: 8,
      position: "relative",
      zIndex: 100,
      background: Primary
    },
    humber: {
      padding: 0,
      marginRight: -4
    }
  })
);

export default useStyles;
