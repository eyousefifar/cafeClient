import { makeStyles, createStyles } from "@material-ui/core/styles";
import { secondary } from "../../../../color";

const useStyles = makeStyles(
  createStyles({
    center: {
      color: secondary,
      textAlign: "center"
    }
  })
);

export default useStyles;
