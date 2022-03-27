import React from "react";
import { Modal, Label, Button } from "atoms";
import { CreateProjectPopup } from "..";
function DashboardPopup(props) {
  const {
    open,
    toggleOpen,
    handler,
    mySelf,
    loader,
    toggleMySelftProject,
    history,
  } = props;
  return (
    <>
      {mySelf ? (
        <CreateProjectPopup
          handler={handler}
          open={mySelf}
          loader={loader}
          close={toggleMySelftProject}
        />
      ) : null}
      <Modal
        width="xs"
        close={toggleOpen}
        header={
          <>
            <Label
              value="Please choose one the option below:"
              classes={{
                root:
                  "md:text-lg text-base md:p-5 pb-5 tracking-tight font-sans text-center",
              }}
            />
          </>
        }
        content={
          <div className="md:px-5 md:pb-4">
            <div className="border rounded-md border-current grid grid-cols-2 gap-x-1 p-1">
              <Button
                value="By Myself"
                onClick={toggleMySelftProject}
                classes={{
                  root:
                    "bg-current text-white py-2 tracking-tight transform-none md:text-sm text-xs",
                }}
              />
              <Button
                onClick={history}
                value="By IDEEZA Algoritham"
                classes={{
                  root:
                    "bg-current text-white py-2 tracking-tight transform-none md:text-sm text-xs",
                }}
              />
            </div>
          </div>
        }
        actions={<></>}
        open={open}
      />
    </>
  );
}

export default React.memo(DashboardPopup);
