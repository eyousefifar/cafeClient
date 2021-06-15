import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Primary } from "../../../color";

const useStyles = makeStyles(
  createStyles({
    paper: {
      borderRadius: 10,
      padding: 8,
      color: Primary,
      margin: 6
    }
  })
);

export default useStyles;
