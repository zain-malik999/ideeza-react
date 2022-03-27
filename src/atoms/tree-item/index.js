import React from "react";
import { TreeItem } from "@material-ui/lab";
import Proptype from "prop-types";
function TreeItems(props) {
  const { Items } = props;
  return Items?.map((v, k) => {
    return (
      <TreeItem key={k} nodeId={v?.id} label={v?.name}>
        {v?.children?.map((val, i) => {
          return (
            <TreeItem key={i + k + 1 * 2} nodeId={val?.id} label={val?.name}>
              {<TreeItems Items={val?.children} />}
            </TreeItem>
          );
        })}
      </TreeItem>
    );
  });
}
TreeItems.prototype = {
  Items: Proptype.array,
};
TreeItems.defaultProps = {
  Items: [],
};
export default TreeItems;
