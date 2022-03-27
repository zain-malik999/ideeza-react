import React from "react";
import { Modal } from "atoms";
import { ChooseYourAvatar } from "../..";
function AvatarPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="xs"
        close={toggleOpen}
        header={<></>}
        content={
          <>
            <ChooseYourAvatar />
          </>
        }
        actions={<></>}
        open={open}
      />
    </div>
  );
}
export default AvatarPopup;
