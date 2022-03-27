import React, { useState } from "react";
import TouchRipple from "@material-ui/core/ButtonBase";
import { MyIdeezaIcon } from "molecules";
function MyIdeeza({ project }) {
  const [toggle, setToggle] = useState(false);
  const [memo, setMemo] = useState(false);
  const toggleHandler = (e) => {
    if (toggle === true) {
      setToggle(false);
      return setTimeout(() => {
        setMemo(false);
      }, 300);
    }
    setMemo(true);
    return setToggle(true);
  };
  return (
    <div className="myIDeeza z-50 fixed bottom-0 flex items-center justify-end">
      <div className="w-auto relative m-8">
        <TouchRipple
          onClick={toggleHandler}
          className="outline-none hover:bg-transparent"
        >
          <img src="/assets/my-ideeza/my-ideeza.png" alt="" />
        </TouchRipple>
        {memo ? (
          <>
            <MyIdeezaIcon
              toggle={toggle}
              css="right-12 -bottom-10"
              img="/assets/my-ideeza/message.png"
              value="New Message"
              right={48}
              bottom={-40}
            />
            <MyIdeezaIcon
              css="right-20 bottom-6"
              img="/assets/my-ideeza/notes.png"
              toggle={toggle}
              value="New Notes"
              right={80}
              bottom={24}
            />
            <MyIdeezaIcon
              css="right-8 bottom-24"
              img="/assets/my-ideeza/notification.png"
              value="New Notification"
              toggle={toggle}
              right={32}
              bottom={96}
            />
            <MyIdeezaIcon
              css="-right-10 bottom-24"
              img="/assets/my-ideeza/new-noti.png"
              value="New Project"
              toggle={toggle}
              right={-40}
              bottom={96}
              click={project}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}
export default React.memo(MyIdeeza);
