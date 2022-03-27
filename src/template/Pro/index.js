import React from "react";
import clsx from "clsx";
import { Header } from "molecules";
import { Drawer } from "orgasms";
import { useStyles } from "../common/style";
import { ProHeader } from "molecules";
function Template(props) {
  const { Sidebar, route, history, open, toggle, user, name } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header user={user} open={open} toggle={toggle} />
      <Drawer
        open={open}
        toggle={toggle}
        location={props.location}
        isSidebar={true}
      >
        <div className="w-full px-5">
          <Sidebar />
        </div>
      </Drawer>
      <main
        className={clsx(
          classes.content,
          "md:p-6 lg:p-8 p-4 mt-10 bg-gray-150 ",
          {
            [classes.contentShift]: open,
          }
        )}
      >
        <ProHeader name={name} route={route} history={history} />
        <div className="pb-16 mt-0 -mb-20">{props.children}</div>
      </main>
    </div>
  );
}
export default Template;
