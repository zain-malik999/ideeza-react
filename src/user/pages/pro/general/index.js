import React, { useEffect, useState, useRef } from "react";
import { toggleLoader, togglePopup } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { SaveModal, AddSuccess } from "orgasms";
import { Button } from "atoms";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GeneralScene } from "engine";
function Electronic() {
  const { register, errors, control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const route = useRouteMatch();
  console.log("route", route);
  const [option, setOption] = useState([]);
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState(false);
  const popup = useSelector(({ Pro }) => Pro?.popup);
  const loader = useSelector(({ Pro }) => Pro?.loader);
  const category = useSelector(({ Pro }) => Pro?.category);
  const handlePopup = () => dispatch(togglePopup());
  const handlerSubmit = async (data) => {};
  useEffect(() => {
    setOpen(popup);
  }, [popup]);
  useEffect(() => {
    setIndicator(loader);
  }, [loader]);
  useEffect(() => {
    if (category) {
      setOption(category);
    }
  }, [category]);
  return (
    <>
      <SaveModal
        register={register}
        errors={errors}
        control={control}
        handlerSubmit={handlerSubmit}
        handleSubmit={handleSubmit}
        options={option}
        loader={indicator}
        open={open}
        close={handlePopup}
      />
      <div className="w-full mt-10">
        <Switch>
          <Route exact path={`${route.url}/`} render={() => <GeneralScene />} />
          <Route
            exact
            path={`${route.url}/success`}
            render={() => <AddSuccess value="cover" />}
          />
          <Route path="*" render={() => <Redirect to={`${route.url}/`} />} />
        </Switch>
        <div className="w-full flex pt-4 items-center justify-end">
          <Button
            value="Save"
            variant="contained"
            size="medium"
            color="primary"
            classes={{ root: "bg-ideeza-100 w-32" }}
          />
        </div>
      </div>
    </>
  );
}
export default Electronic;
