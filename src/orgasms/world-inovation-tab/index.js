import React, { useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { Label, Avatar, Popover, Input } from "atoms";
import { SelectField, SearchInput, Icon_Label, Comment } from "molecules";
import { ImgCard, L_S_C } from "..";
import { AiFillEye } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosCopy, IoIosRemoveCircle, IoMdFlag } from "react-icons/io";
import { FaBellSlash } from "react-icons/fa";
import moment from "moment";
import Loader from "skeltons/news-feed/";
function WorldInovationTab(props) {
  const { state, handleEnter, loading } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [open2, setOpen2] = React.useState(false);
  const [id2, setId2] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const handleComment = (event, state) => {
    if (event.key === "Enter") {
      handleEnter({
        text: comment,
        news_feed: state?.id,
        parent: null,
      });
      return setComment("");
    }
  };
  const changeHandler = (e) => setComment(e?.target?.value);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  useEffect(() => {
    setOpen2(Boolean(anchorEl2));
  }, [anchorEl2]);
  useEffect(() => {
    setId2(open2 ? "simple-popover" : undefined);
  }, [open2]);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className="md:pl-20 pl-20">
        <SearchInput
          placeholder="Search..."
          className="pl-2"
          inputClass="bg-white rounded text-sm py-3"
        />
        <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-2 my-6 justify-between">
          <SelectField
            mainClasses="grid grid-cols-2 md:flex w-full items-center"
            className="w-full text-sm tracking-tighter font-sans shadow bg-white p-2 pl-1 pr-0 text-gray-600"
            containerClass={{ root: "text-xs p-2 bg-white text-gray-910" }}
            value="Browse by tag"
            placeholder="Select a tag"
            labelClasses="text-sm pr-2 md:w-42 tracking-tight text-gray-300 font-medium font-sans"
          />
          <SelectField
            mainClasses="grid grid-cols-2 md:flex w-full items-center"
            className="w-full text-sm tracking-tighter font-sans shadow bg-white p-2 pl-1 pr-0 text-gray-600"
            containerClass={{ root: "text-xs p-2 bg-white text-gray-910" }}
            value="Sort by"
            placeholder="Lost viewed"
            labelClasses="text-sm pr-2 md:w-42 tracking-tight text-gray-300 font-sans md:text-right text-left"
          />
          <SelectField
            mainClasses="grid grid-cols-2 md:flex w-full items-center"
            className="w-full text-sm tracking-tighter font-sans shadow bg-white p-2 pl-1 pr-0 text-gray-600"
            containerClass={{ root: "text-xs text-gray-910 p-2 bg-white" }}
            value="From"
            placeholder="Last week"
            labelClasses="text-sm pr-2 md:w-42 tracking-tight text-gray-300 font-sans md:text-right text-left"
          />
        </div>
      </div>
      {loading
        ? new Array(20).fill("").map((v, k) => <Loader key={k} />)
        : state?.map((val, key) => {
            return (
              <div key={key} className="grid mt-10 grid-cols-10">
                <>
                  <Avatar
                    src={val?.user?.profile_photo}
                    onClick={handleClick2}
                    aria-describedby={val?.id}
                    variant="contained"
                    className="md:w-16 w-10 md:h-16 h-10 ml-1 cursor-pointer relative"
                  />
                </>
                <div className="col-span-9 md:ml-3 ml-5 lg:ml-6 xl:ml-3">
                  <div className="rounded-lg shadow-md bg-white">
                    <div className="border-b border-gray-400 flex justify-between items-center py-2 px-4">
                      <Label
                        classes={{
                          root:
                            "text-base text-gray-900 tracking-tighter font-sans pr-3",
                        }}
                        value={
                          <>
                            <span className="text-gray-300 capitalize">
                              {val?.user?.first_name +
                                " " +
                                val?.user?.last_name}
                            </span>{" "}
                            <span className="mx-2 font-sans">
                              Share a Product
                            </span>
                            <span className="text-xs font-sans leading-5">
                              • {moment(val?.created_at).fromNow()}
                            </span>
                          </>
                        }
                      />
                      <IconButton
                        className="outline-none"
                        onClick={handleClick}
                        id={id}
                      >
                        <MdMoreHoriz className="text-3xl font-sans cursor-pointer text-gray-600" />
                      </IconButton>
                      <Popover
                        open={open}
                        handleClick={handleClick}
                        onClose={handleClose}
                        id={id}
                        anchorEl={anchorEl}
                      >
                        <div className="py-2 w-64">
                          <Icon_Label
                            mainClass="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                            tooltipProps={{ open: false }}
                            labelValue="Save"
                            iconContanerClass="text-lg w-6"
                            lableClass={{
                              root: `text-gray-300 tracking-tighter text-md ml-2`,
                            }}
                            iconComponent={
                              <BsFillBookmarkFill className="text-gray-910 text-2xl pt-1" />
                            }
                          />
                          <Icon_Label
                            mainClass="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                            tooltipProps={{ open: false }}
                            labelValue="Send in a private message"
                            iconContanerClass="text-lg w-6"
                            lableClass={{
                              root: `text-gray-300 tracking-tighter text-md ml-2`,
                            }}
                            iconComponent={
                              <img
                                src="/assets/images/chatboxes.svg"
                                className="w-4 mt-1 ml-1"
                              />
                            }
                          />
                          <Icon_Label
                            mainClass="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                            tooltipProps={{ open: false }}
                            labelValue="Copy link to post"
                            iconContanerClass="text-lg w-6"
                            lableClass={{
                              root: `text-gray-300 tracking-tighter text-md ml-2`,
                            }}
                            iconComponent={
                              <IoIosCopy className="text-gray-910 text-xl" />
                            }
                          />
                          <Icon_Label
                            mainClass="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                            tooltipProps={{ open: false }}
                            labelValue={
                              <>
                                Hide this post
                                <span className="text-gray-910 text-xs">
                                  I don't want to see this post in my feed
                                </span>
                              </>
                            }
                            iconContanerClass="text-lg w-6"
                            lableClass={{
                              root: `text-gray-300 flex flex-col tracking-tighter text-md ml-2`,
                            }}
                            iconComponent={
                              <IoIosRemoveCircle className="text-gray-910 text-lg" />
                            }
                          />
                          <Icon_Label
                            mainClass="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                            tooltipProps={{ open: false }}
                            labelValue={
                              <>
                                Unfollow John Doe
                                <span className="text-gray-910 text-xs">
                                  Stay connected but hide John's feed
                                </span>
                              </>
                            }
                            iconContanerClass="text-lg w-6"
                            lableClass={{
                              root: `text-gray-300 flex flex-col tracking-tighter text-md ml-2`,
                            }}
                            iconComponent={
                              <FaBellSlash className="text-gray-910 text-xl" />
                            }
                          />
                          <Icon_Label
                            mainClass="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                            tooltipProps={{ open: false }}
                            labelValue={
                              <>
                                Report this post
                                <span className="text-gray-910 text-xs">
                                  This post is offensive or account is hacked
                                </span>
                              </>
                            }
                            iconContanerClass="text-lg w-6"
                            lableClass={{
                              root: `text-gray-300 flex flex-col tracking-tighter text-md ml-2`,
                            }}
                            iconComponent={
                              <IoMdFlag className="text-gray-910 text-2xl" />
                            }
                          />
                          <Icon_Label
                            mainClass="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                            tooltipProps={{ open: false }}
                            labelValue={
                              <>
                                Improve my feed
                                <span className="text-gray-910 text-xs">
                                  Get recommended sources to show
                                </span>
                              </>
                            }
                            iconContanerClass="text-lg w-6"
                            lableClass={{
                              root: `text-gray-300 flex flex-col tracking-tighter text-md ml-2`,
                            }}
                            iconComponent={
                              <img
                                src="/assets/images/cogsvg.svg"
                                className="w-4 mt-1 ml-1"
                              />
                            }
                          />
                        </div>
                      </Popover>
                    </div>
                    <div className="p-4 space-y-4">
                      <Label
                        classes={{
                          root: "text-md text-gray-600 leading-6 pb-2",
                        }}
                        value={val?.text}
                      />
                      <ImgCard
                        carouselHeight="rounded-xl w-full lg:h-50vh md:h-40vh h-25vh overflow-hidden"
                        mainIconClass="flex items-center"
                        iconsClass="flex justify-end pr-5 pb-1 space-x-6"
                        iconContanerClass="text-white w-5 mr-1"
                        iconComponent1={
                          <AiFillEye className="text-white text-xl" />
                        }
                        iconComponent2={
                          <img
                            src="/assets/images/feeds/ideeza-white.svg"
                            alt=""
                            srcset=""
                          />
                        }
                        iconComponent3={
                          <img
                            src="/assets/images/feeds/review.svg"
                            alt=""
                            srcset=""
                          />
                        }
                        lableClass={{ root: "text-white text-base font-sans" }}
                        iconValue1="211"
                        iconValue2="76"
                        iconValue3="76"
                      />
                      <L_S_C />
                    </div>
                  </div>
                  <div className="mt-6">
                    {val?.comments?.map((v, i) => {
                      return v?.parent === null ? (
                        <Comment
                          nameValue={`${v?.user?.first_name} ${v?.user?.last_name}`}
                          jobValue={
                            v?.company_info ? v?.company_info : "--- ---"
                          }
                          timeValue={moment(v?.created_at).fromNow()}
                          descriptionValue={v?.text}
                          likesValue={`${v?.likes} Likes`}
                          commentValue={`${v?.sub_comments?.length} Comments`}
                          containerClass="rounded text-capitalize bg-white p-3 md:px-4 w-full"
                          timeClass="text-blue-350 md:text-base text-xs pt-0.5 md:pt-0 font-sans"
                          key={i}
                        >
                          {v?.sub_comments?.map((val, index) => {
                            return (
                              <Comment
                                nameValue={`${val?.user?.first_name} ${val?.user?.last_name}`}
                                jobValue={
                                  val?.company_info
                                    ? val?.company_info
                                    : "--- ---"
                                }
                                timeValue={moment(val?.created_at).fromNow()}
                                descriptionValue={val?.text}
                                likesValue={`${val?.likes} Likes`}
                                commentValue={`${val?.comments?.length} Comments`}
                                containerClass="rounded text-capitalize bg-white p-3 md:px-4 w-full"
                                timeClass="text-blue-350 md:text-base text-xs pt-0.5 md:pt-0 font-sans"
                                key={index}
                              />
                            );
                          })}
                        </Comment>
                      ) : null;
                    })}
                  </div>
                  <div className="shadow-lg p-2 mt-10 bg-white rounded-lg">
                    <Input
                      change={changeHandler}
                      onKeyDown={(e) => handleComment(e, val)}
                      value={comment}
                      placeholder="Write your comment..."
                      InputProps="p-0"
                      className={{
                        root: `p-0 bg-transparent tracking-tight font-sans`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
}

export default React.memo(WorldInovationTab);
