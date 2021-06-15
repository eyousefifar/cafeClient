import { makeStyles, createStyles } from "@material-ui/core/styles";
import { PrimaryBackground, defaultColor } from "../../../../../color";

const useStyles = makeStyles(
  createStyles({
    listStyle: {
      marginTop: 45,
      marginRight: 20,
      maxWidth: 70,
      backgroundColor: PrimaryBackground,
      borderRadius: 10,
      padding: 14
    },
    btn: {
      backgroundColor: "#fff",
      borderRadius: 10,
      border: `3px solid ${defaultColor}`,
      padding: 0,
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.8)"
      }
    },
    grid: {
      padding: "3px 14px"
    }
  })
);

export default useStyles;
