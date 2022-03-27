import React from "react";
import { Label } from "atoms";
import { TreeView, TreeItem } from "@material-ui/lab";
import Proptype from "prop-types";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
function TreeViews(props) {
  const { Items, click } = props;
  return (
    <TreeView
      className="w-full"
      defaultCollapseIcon={<FiChevronDown />}
      defaultExpandIcon={<FiChevronRight />}
    >
      <TreeItems click={click} Items={Items} />
    </TreeView>
  );
}
TreeViews.prototype = {
  Items: Proptype.array,
};
TreeViews.defaultProps = {
  Items: [],
};
function TreeItems(props) {
  const { Items, click } = props;
  return Items?.map((v, k) => {
    return (
      <TreeItem
        key={k}
        nodeId={v?.id}
        className="mt-3 select-none"
        label={
          <div
            onClick={
              v?.children && v?.children?.length !== 0
                ? () => {}
                : click.bind(this, "electronic", v?.id)
            }
            className="flex items-center"
          >
            <Label
              value={v?.name}
              classes={{
                root: "font-sans tracking-wide capitalize font-medium",
              }}
              variant="body1"
            />
            {v?.children ? (
              <Label
                value={`(${v?.children?.length})`}
                classes={{
                  root:
                    "font-sans text-ideeza-100 -mt-2 ml-2 tracking-wide capitalize font-medium",
                }}
                variant="caption"
              />
            ) : null}
          </div>
        }
      >
        {v?.children?.map((val, i) => {
          return (
            <TreeItem
              className="mt-3 select-none"
              key={i + k + 1 * 2}
              nodeId={val?.id}
              label={
                <div
                  onClick={
                    val?.children && val?.children?.length !== 0
                      ? () => {}
                      : click.bind(this, "electronic", val?.id)
                  }
                  className="flex items-center"
                >
                  <Label
                    value={val?.name}
                    classes={{
                      root: "font-sans tracking-wide capitalize font-medium",
                    }}
                    variant="body1"
                  />
                  {val?.children ? (
                    <Label
                      value={`(${val?.children?.length})`}
                      classes={{
                        root:
                          "font-sans text-ideeza-100 -mt-2 ml-2 tracking-wide capitalize font-medium",
                      }}
                      variant="caption"
                    />
                  ) : null}
                </div>
              }
            >
              {<TreeItems click={click} Items={val?.children} />}
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
export default TreeViews;
