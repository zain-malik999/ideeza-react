import React, { useState, useEffect } from "react";
import { NewsCard, NewsConnect, TabsMolecule } from "molecules";
import { WorldInovationTab, NewsFeedSection } from "orgasms";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewsFeed,
  onGetUserConnect,
  connectUsers,
  postComment,
} from "./store/action";
import Reducer from "./store/reducer";
function NewsFeed() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [feed, setFeed] = useState([]);
  const [connect, setConnect] = useState([]);
  const [loader, setLoader] = useState(false);
  const auth = useSelector(({ Auth }) => Auth?.authenticated);
  const state = useSelector(({ NewFeed }) => NewFeed?.feed);
  const conect = useSelector(({ NewFeed }) => NewFeed?.connectUser);
  const loading = useSelector(({ NewFeed }) => NewFeed?.loading);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const clickHandler = (id) => {
    return dispatch(connectUsers(id));
  };
  const handleEnter = (payload) => dispatch(postComment(payload));
  useEffect(() => {
    if (auth) {
      dispatch(getNewsFeed());
      dispatch(onGetUserConnect());
    }
  }, [auth]);
  useEffect(() => {
    setLoader(loading);
  }, [loading]);
  useEffect(() => {
    if (state) {
      setFeed(state);
    }
  }, [state]);
  useEffect(() => {
    setConnect(conect);
  }, [conect]);

  return (
    <div className="grid lg:grid-cols-10 gap-y-8 md:px-10 md:mt-10 items-start">
      <div className="lg:col-span-7 order-1 lg:order-0 lg:pr-12">
        <TabsMolecule
          index={index}
          handleChange={handleChange}
          tabsClasses="md:mx-18 lg:mx-20 rounded"
          tabClasses=" w-full bg-white text-base font-sans tracking-tight news-tabs transition-all duration-500 ease-in-out text-gray-350 "
          tabsData={[
            {
              name: "Following",
              component: (
                <div className="mt-10">
                  <NewsFeedSection />
                </div>
              ),
            },
            {
              name: "World innovation",
              component: (
                <div className="mt-5 md:pr-16 pr-4 h-75vh pb-3 overflow-y-auto">
                  <WorldInovationTab
                    loading={loader}
                    handleEnter={handleEnter}
                    state={feed}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
      <div className="lg:col-span-3 gap-7 xl:px-4 grid lg:grid-cols-1 md:grid-cols-2 order-0 lg:order-1">
        <NewsCard
          spnsrValue="Sponsored"
          uprValue="Ahmed Doe’s new way of Tech Product"
          desc="Lorem ipsum dolores sit, amanet dolisi isilti as hat why souriti lalola. That’s why he wanted to create something unordinary...."
          datevalue="Nov 12, 2018 • Electronics"
        />
        <NewsConnect
          value="PEOPLE YOU SHOULD CONNECT"
          connect={connect}
          clickHandlerid={clickHandler}
        />
      </div>
    </div>
  );
}

export default withReducer("NewFeed", Reducer)(React.memo(NewsFeed));
