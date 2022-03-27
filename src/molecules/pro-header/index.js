import React, { useEffect, useState } from "react";
import { Icon_Label } from "..";
import { Label } from "atoms";
import {
  IoLogoElectron,
  IoCubeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { DiCode } from "react-icons/di";
import { RiStackFill } from "react-icons/ri";
function ProHeader({ route, history, name }) {
  const [param, setParam] = useState(null);
  useEffect(() => {
    const { pathname } = route;
    if (pathname) {
      let path = pathname.split("/");
      if (path.length >= 5) {
        let id = path[path.length - 1];
        id = parseInt(id);
        setParam(id);
      }
    }
  }, [route?.pathname]);
  const push = (e) => history.push(`/user/pro/${e}/${param ? param : ""}`);
  return (
    <div className="w-full border-b border-blue-100 pb-3 border-opacity-50 py-4 flex items-center justify-between">
      <Label value={name} classes={{ root: "" }} variant="h5" />
      <div className="w-auto flex items-center">
        <Icon_Label
          onClick={push.bind(this, "electronic/schematic")}
          mainClass={`flex cursor-pointer mr-4 hover:text-current transition-all items-center ${
            route?.pathname?.includes("electronic") ? "text-current" : ""
          }`}
          lableClass={{
            root: `text-sm ml-2 mb-0 font-sans ${
              route?.pathname?.includes("electronic") ? "text-current" : ""
            }`,
          }}
          iconContanerClass="bg-transparent text-2xl"
          iconComponent={<IoLogoElectron />}
          labelValue="Electronics"
        />
        <Icon_Label
          onClick={push.bind(this, "code")}
          mainClass={`flex cursor-pointer mr-4 hover:text-current transition-all items-center ${
            route?.pathname?.includes("code") ? "text-current" : ""
          }`}
          lableClass={{
            root: `text-sm ml-2 mb-0 font-sans ${
              route?.pathname?.includes("code") ? "text-current" : ""
            }`,
          }}
          iconContanerClass="bg-transparent text-3xl"
          iconComponent={<DiCode />}
          labelValue="Code"
        />
        <Icon_Label
          onClick={push.bind(this, "cover")}
          mainClass={`flex cursor-pointer mr-4 hover:text-current transition-all items-center ${
            route?.pathname?.includes("cover") ? "text-current" : ""
          }`}
          lableClass={{
            root: `text-sm ml-2 mb-0 font-sans ${
              route?.pathname?.includes("cover") ? "text-current" : ""
            }`,
          }}
          iconContanerClass="bg-transparent text-xl"
          iconComponent={<IoCubeOutline />}
          labelValue="Cover"
        />
        <Icon_Label
          onClick={push.bind(this, "general")}
          mainClass={`flex cursor-pointer mr-4 hover:text-current transition-all items-center ${
            route?.pathname?.includes("general") ? "text-current" : ""
          }`}
          lableClass={{
            root: `text-sm ml-2 mb-0 font-sans ${
              route?.pathname?.includes("general") ? "text-current" : ""
            }`,
          }}
          iconContanerClass="bg-transparent text-xl"
          iconComponent={<IoSettingsOutline />}
          labelValue="General"
        />
        <Icon_Label
          mainClass="flex cursor-pointer hover:text-current transition-all items-center"
          iconContanerClass="bg-transparent text-lg"
          iconComponent={<RiStackFill />}
          labelValue="App"
          lableClass={{ root: "text-sm ml-2 mb-0 font-sans" }}
        />
      </div>
    </div>
  );
}
export default ProHeader;
