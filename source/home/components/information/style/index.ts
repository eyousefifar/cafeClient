import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    information: {
      margin: "6px 20px",
      minHeight: 80,
      backgroundColor: "rgba(255,255,255)",
      borderRadius: 10,
      padding: 10,
      "&>div>div": {
        marginBottom: 6
      }
    },
    boxAddress: {
      marginTop: 10,
      maxWidth: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  })
);

export default useStyles;
