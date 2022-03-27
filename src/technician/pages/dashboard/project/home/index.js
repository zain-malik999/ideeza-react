import React, { useState, useEffect } from "react";
import { ProjectPage } from "orgasms";
import {
  onGetPrivateProjects,
  onContributeProjects,
} from "./privateStore/action";
import { ProjectCarousel } from "molecules";
import { onGetPublicProjects } from "./privateStore/action";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";

import Reducer from "./privateStore/reducer";
function ProjectHome(props) {
  const history = useHistory();
  const route = useRouteMatch();
  const [auth, setAuth] = useState(false);
  const [privateProjects, setPrivateProjects] = useState(null);
  const [publicProjects, setPublicProjects] = useState(null);
  const [contributeProjects, setContributeProjects] = useState(null);
  const [publicLoader, setPublicLoader] = useState(false);
  const [privateLoader, setPrivateLoader] = useState(false);
  const [contributeLoader, setContributeLoader] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.Auth.authenticated);
  const PrivateData = useSelector(
    ({ UserPrivateProjects }) => UserPrivateProjects?.private_projects
  );
  const PublicData = useSelector(
    ({ UserPrivateProjects }) => UserPrivateProjects?.public_projects
  );
  const contributeData = useSelector(
    ({ UserPrivateProjects }) => UserPrivateProjects?.contribute
  );
  const LoaderPublic = useSelector(
    ({ UserPrivateProjects }) => UserPrivateProjects?.publicLoader
  );
  const LoaderPrivate = useSelector(
    ({ UserPrivateProjects }) => UserPrivateProjects?.privateLoader
  );
  const LoaderContribute = useSelector(
    ({ UserPrivateProjects }) => UserPrivateProjects?.contributeLoader
  );
  const getPrivateAllData = () => dispatch(onGetPrivateProjects());
  const getPublicAllData = () => dispatch(onGetPublicProjects());
  const ClickHandler = async (id, product) => {
    if (
      product?.user_products?.length === 0 ||
      product?.user_products?.length > 1
    ) {
      return history.push(`${route.url}/project-detail/${id}`);
    } else {
      return history.push(
        `${route.url}/product-detail/${product?.user_products[0]?.id}`
      );
    }
  };
  const handleProduct = (id) =>
    history.push(`${route.url}/product-detail/${id}`);
  useEffect(() => {
    setAuth(state);
  }, [state]);

  useEffect(() => {
    if (auth) {
      getPublicAllData();
      dispatch(onContributeProjects());
      getPrivateAllData();
    }
  }, [auth]);

  useEffect(() => {
    if (PrivateData) {
      setPrivateProjects(PrivateData);
    }
  }, [PrivateData]);

  useEffect(() => {
    if (PublicData) {
      setPublicProjects(PublicData);
    }
  }, [PublicData]);
  useEffect(() => {
    setContributeProjects(contributeData);
  }, [contributeData]);
  useEffect(() => {
    setPublicLoader(LoaderPublic);
  }, [LoaderPublic]);
  useEffect(() => {
    setPrivateLoader(LoaderPrivate);
  }, [LoaderPrivate]);
  useEffect(() => {
    setContributeLoader(LoaderContribute);
  }, [LoaderContribute]);
  return (
    <>
      <ProjectPage
        loader={publicLoader}
        changeid={ClickHandler}
        value="My private projects"
        projects={privateProjects}
        handleProduct={handleProduct}
      />
      <ProjectPage
        loader={privateLoader}
        changeid={ClickHandler}
        value="My public projects"
        projects={publicProjects}
        handleProduct={handleProduct}
      />
      <ProjectPage
        loader={contributeLoader}
        changeid={ClickHandler}
        value="Projects I contribute to"
        projects={contributeProjects}
        handleProduct={handleProduct}
      />
    </>
  );
}

export default withReducer("UserPrivateProjects", Reducer)(ProjectHome);
