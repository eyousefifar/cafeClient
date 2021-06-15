import { makeStyles, createStyles } from "@material-ui/core/styles";

import { defaultColor } from "../../../../../color";

const useStyles = makeStyles(
  createStyles({
    button: {
      fontFamily: "iranSanse",
      color: defaultColor,
      marginLeft: 13,
      padding: "4px 8px 4px 6px"
    },
    return: {
      marginLeft: 6,
      fontSize: 12
    }
  })
);

export default useStyles;
