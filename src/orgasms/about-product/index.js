import React, { useState } from "react";
import { Button, Input, Dropdown } from "atoms";
import { EditableInput, Comment, Icon_Label } from "molecules";
import { AiFillEye } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { IoCartSharp } from "react-icons/io5";
import { ShareNewsFeedPopup } from "..";
import moment from "moment";

function AboutProduct(props) {
  const {
    iconClasses,
    clickHandler,
    state,
    postProductComment,
    onEdit,
    share,
  } = props;
  const [popup, SetPopup] = useState(false);
  const [comment, setComment] = useState("");
  const toggleOpen = () => {
    return SetPopup(!popup);
  };
  const [edit, setEdit] = useState(false);
  const [desc, setDesc] = useState("");
  const changeHandler = (e) => setComment(e?.target?.value);
  const handleClick = (event) => {
    if (event.key === "Enter") {
      return Promise.all([
        postProductComment({ text: comment, user_product: state?.id }),
      ]).then(() => setComment(""));
    }
  };
  return (
    <>
      <ShareNewsFeedPopup open={popup} toggleOpen={toggleOpen} />
      <div className="xl:w-3/5 lg:w-11/12 w-full mx-auto max-h-80vh overflow-y-auto overflow-x-hidden md:pr-2">
        <div className="bg-gray-100 rounded-b-lg pt-2 md:pt-0">
          <div className="md:flex justify-between px-3 items-center">
            <div
              className={`flex justify-end md:space-x-4 space-x-3 order-last ${iconClasses}`}
            >
              <Icon_Label
                labelValue={state?.view}
                mainClass="flex items-center"
                iconContanerClass="text-2xl text-gray-800"
                lableClass={{ root: "text-sm pl-1 font-light text-gray-810" }}
                iconComponent={<AiFillEye className="text-gray-810 text-xl" />}
                tooltipProps={{ open: false }}
              />
              <Icon_Label
                labelValue="12"
                mainClass="flex items-center"
                iconContanerClass="text-2xl text-gray-800"
                lableClass={{ root: "text-sm pl-1 font-light text-gray-810" }}
                tooltipProps={{ open: false }}
                iconComponent={
                  <img
                    src="/assets/images/ideeza-icon-gray.png"
                    className="w-4"
                  />
                }
              />
              <Icon_Label
                labelValue="12"
                mainClass="flex items-center"
                iconContanerClass="text-2xl text-gray-800"
                lableClass={{ root: "text-sm pl-1 font-light text-gray-810" }}
                tooltipProps={{ open: false }}
                iconComponent={
                  <img src="/assets/images/like-gray.png" className="w-4" />
                }
              />
            </div>
            <div className="flex p-4 items-center">
              <Dropdown
                className="p-0"
                icons={
                  <Button
                    value="Share Invention"
                    classes={{
                      root:
                        "bg-ideeza-100 md:text-md text-sm w-full text-white transform-none font-medium tracking-tight font-sans md:px-2 py-2 rounded",
                    }}
                    endIcon={
                      <TiStarFullOutline className="md:text-lg text-md" />
                    }
                  />
                }
                itemsClasses={{
                  root:
                    "font-sans text-sm px-4 py-3 hover:text-current text-gray-300",
                }}
                options={[
                  {
                    func: share.bind(this, state),
                    name: "Share in news feed",
                    value: "Share in news feed",
                  },
                  {
                    name: "Share external",
                    value: "Share external",
                  },
                ]}
              />
              <Button
                onClick={toggleOpen}
                onClick={clickHandler}
                value="Buy now"
                classes={{
                  root:
                    "bg-ideeza-100 mx-4 md:text-md text-sm text-white transform-none font-medium tracking-tight font-sans md:px-2 py-2 rounded",
                }}
                endIcon={<IoCartSharp className="md:text-lg text-md" />}
              />
              <Button
                onClick={toggleOpen}
                onClick={clickHandler}
                value="Add To Cart"
                variant="outlined"
                color="primary"
                classes={{
                  root:
                    "md:text-md text-sm transform-none font-medium tracking-tight font-sans md:px-2 py-2 rounded",
                }}
                endIcon={<IoCartSharp className="md:text-lg text-md" />}
              />
            </div>
          </div>
          <EditableInput
            mainClass="flex flex-col mt-10 px-4 pr-6 md:pr-4"
            editContanerClass="bg-gray-100 flex tems-center justify-center text-3xl rounded-full w-10 h-10 pt-1"
            edit={edit}
            headerClasses={{
              root: "text-lg font-sans text-current font-semibold",
            }}
            lableClass={{
              root:
                "text-gray-300 text-sm leading-7 tracking-tight font-sans font-lighter mr-2",
            }}
            inputClasses={
              "text-gray-300 bg-white border-ideeza-100 border-solid border-2 text-sm leading-7 tracking-tight font-sans font-lighter mr-2"
            }
            headerLabel="Description"
            editComponent={
              <Button
                classes={{
                  root:
                    "text-sm px-6 h-7 transform-none rounded-sm text-ideeza-100",
                }}
                onClick={() => {
                  if (edit)
                    onEdit({
                      id: state.id,
                      description: desc !== "" ? desc : state.description,
                    });
                  return setEdit(!edit);
                }}
                iconEnd={<RiPencilFill className="text-md" />}
                variant="outlined"
                value={edit ? "Done" : "Edit"}
              />
            }
            setTitle={setDesc}
            childrenClass="pb-6"
            handleChange={() => {}}
            headerMainClasses="flex justify-between mb-2"
            labelValue={state?.description}
            multiline={true}
          >
            <div className="mt-6">
              {state?.comments?.map((v, key) => {
                return v?.parent === null ? (
                  <Comment
                    nameValue={`${v?.user?.first_name} ${v?.user?.last_name}`}
                    jobValue={v?.company_info ? v?.company_info : "--- ---"}
                    timeValue={moment(v?.created_at).fromNow()}
                    descriptionValue={v?.text}
                    likesValue={`${v?.likes} Likes`}
                    commentValue={`${v?.comments?.length} Comments`}
                    containerClass="rounded text-capitalize bg-white p-3 md:px-4 w-full"
                    timeClass="text-blue-350 md:text-base text-xs pt-0.5 md:pt-0 font-sans"
                    key={key}
                  >
                    {v?.comments?.map((val, index) => {
                      return (
                        <Comment
                          nameValue={`${val?.user?.first_name} ${val?.user?.last_name}`}
                          jobValue={
                            val?.company_info ? val?.company_info : "--- ---"
                          }
                          timeValue={moment(val?.created_at).fromNow()}
                          descriptionValue={val?.text}
                          likesValue={`${val?.likes} Likes`}
                          commentValue={`${val?.comments?.length} Comments`}
                          containerClass="rounded text-capitalize bg-white p-3 md:px-4 w-full"
                          timeClass="text-blue-350 md:text-base text-xs pt-0.5 md:pt-0 font-sans"
                          key={key}
                        />
                      );
                    })}
                  </Comment>
                ) : null;
              })}
            </div>
          </EditableInput>
          <div className="mx-4 pb-8 border-t border-gray-200 pt-10">
            <Input
              change={changeHandler}
              onKeyDown={handleClick}
              value={comment}
              // multiline={true}
              placeholder="Write your comment..."
              InputProps="p-0"
              className={{ root: `p-0 py-1 tracking-tight font-sans` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutProduct;
