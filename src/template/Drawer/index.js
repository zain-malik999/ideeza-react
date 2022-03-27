import React from "react";
import clsx from "clsx";
import { Header } from "molecules";
import { Drawer } from "orgasms";
import { useStyles } from "../common/style";
function Template(props) {
  const classes = useStyles();
  const { open, toggle, user } = props;
  return (
    <div className={`w-full ${classes.root}`}>
      <Header user={user} open={open} toggle={toggle} />
      <Drawer
        open={open}
        toggle={toggle}
        location={props.location}
        list={props.list}
      />
      <main
        className={clsx(
          classes.content,
          "md:p-5 lg:p-6 xl:p-7 p-4 bg-gray-150 h-full min-h-screen mainContainer overflow-x-hidden",
          {
            [classes.contentShift]: open,
          }
        )}
      >
        <div className={classes.drawerHeader}>{props.children}</div>
      </main>
    </div>
  );
}
export default React.memo(Template);
