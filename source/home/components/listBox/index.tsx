import Grid from "@material-ui/core/Grid";
import HomeBtn from "./components/homeButton";
import useStyles from "./style";
import Typography from "../../../../custom/typography";

import Reserve from "./assets/svg/reserve";
import Chi from "./assets/svg/chi";
import Comments from "./assets/svg/comments";
import Location from "./assets/svg/location";
import Menu from "./assets/svg/menu";
import Link from "next/link";

const list = [
  { id: 1, text: "رزرو", icon: Reserve, link: "/ckeckout" },
  { id: 4, text: "منو", icon: Menu, link: "/menu" },
  { id: 2, text: "لوکیشن", icon: Location, link: "/location" },
  { id: 3, text: "نظرات", icon: Comments, link: "/comments" }
];

const ListBox = () => {
  const classes = useStyles();

  const width = "37",
    height = "30";

  return (
    <div className={classes.listStyle}>
      <Grid
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        container
      >
        <Grid item>
          <Chi width="50" height="50" />
        </Grid>

        {list.map(menu => (
          <Grid key={menu.id} item>
            <HomeBtn>
              <Link href={menu.link} prefetch>
                <Grid
                  direction="column"
                  justify="center"
                  alignItems="center"
                  container
                  className={classes.grid}
                >
                  <Grid item>
                    <menu.icon width={width} height={height} />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">{menu.text}</Typography>
                  </Grid>
                </Grid>
              </Link>
            </HomeBtn>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListBox;
