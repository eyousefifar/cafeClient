import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";

import useStyles from "./style";

import Back from "./assets/svg/back";
import Router from "next/router";

interface IUser {
  address?: string;
  isSeller?: boolean;
  bday?: Date;
  image?: string;
  name?: string;
  phone?: string;
  story?: string;
  updatedAt?: Date;
  username?: string;
  uuid?: string;
}

interface IProps {
  user: IUser;
}

const DrawerList = (props: IProps) => {
  const { user } = props;
  let menu = [];
  if (!user.isSeller) {
    menu = [
      { id: 1, title: "کافه چی", href: "/" },
      {
        id: 2,
        title: "اینستاگرام کافه چی",
        href: "https://www.instagram.com/cofechi/"
      },
      { id: 3, title: "تماس با کافه چی", href: "tel:+982537840019" },
      { id: 13, title: " پروفایل", href: "/profile" },
      { id: 12, title: " علاقه مندی ها", href: "/profile" }
      // { id: 4, title: "قوانین کافه چی", href: "/rules" }
    ];
  } else {
    menu = [
      { id: 1, title: "کافه چی", href: "/" },
      { id: 13, title: " پروفایل", href: "/profile" },
      { id: 12, title: " علاقه مندی ها", href: "/profile" },
      { id: 10, title: "رزروها", href: "/orders" },
      { id: 11, title: "میزها", href: "/tabel" },
      { id: 4, title: "محصولات", href: "/myProductList" },
      { id: 5, title: "نظرات", href: "/accept" },
      { id: 6, title: "دسته بندی ها", href: "/category" },
      { id: 7, title: "تعطیلات", href: "/holiday" },
      { id: 8, title: "زمان بندی ها", href: "/timing" },
      { id: 9, title: "سفارش گیری", href: "/ordering" }
    ];
  }
  const logOut = async () => {
    localStorage.removeItem("Auth");
    if (typeof window !== "undefined") {
      Router.replace("/register");
    }
    window.location.reload();
  };
  const classes = useStyles();
  return (
    <div className={classes.fullHeight}>
      <List className={classes.list}>
        {menu.map(menuItem => (
          <span key={menuItem.id}>
            {menuItem.id === 2 || menuItem.id === 3 ? (
              <a className={classes.Aitem} href={menuItem.href} target="_blank">
                <span className={classes.Alink}>
                  {menuItem.title}
                  <Back />
                </span>
              </a>
            ) : (
              <ListItem button className={classes.item}>
                <Link href={menuItem.href} prefetch>
                  <span className={classes.link}>
                    {menuItem.title}
                    <Back />
                  </span>
                </Link>
              </ListItem>
            )}

            <Divider />
          </span>
        ))}
        <span>
          <ListItem button className={classes.item}>
            <span
              className={classes.link}
              onClick={() => {
                logOut();
              }}
            >
              {"خروج"}
              <Back />
            </span>
          </ListItem>

          <Divider />
        </span>
      </List>
    </div>
  );
};

export default DrawerList;
