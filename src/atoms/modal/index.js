import React from "react";
import { Dialog, DialogContent, DialogActions } from "@material-ui/core/";
import Proptype from "prop-types";
function Modal(props) {
  const { header, content, className, actions, open, close, width } = props;
  return (
    <Dialog
      fullWidth
      keepMounted={false}
      maxWidth={width}
      onClose={close}
      open={open}
      classes={className}
    >
      {header}
      <DialogContent className="p-0">{content}</DialogContent>
      <DialogActions classes={{ root: "justify-start" }}>
        {actions}
      </DialogActions>
    </Dialog>
  );
}
Modal.prototype = {
  open: Proptype.bool,
  width: Proptype.string,
  content: Proptype.element,
  header: Proptype.element,
  action: Proptype.element,
  className: Proptype.object,
};
Modal.defaultProps = {
  className: { paper: "rounded-xl md:p-6 p-4" },
};
export default Modal;
