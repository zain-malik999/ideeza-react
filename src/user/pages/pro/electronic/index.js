import React, { useEffect, useState, useRef } from "react";
import { SchematicScene, DesignScene } from "engine";
import {
  getElectronicSidebar,
  getElectronicSchematic,
  onNextElectronic,
  onPreviousElectronic,
  mutateElectronicSchematicState,
  toggleLoader,
  togglePopup,
  getElectronicDesign,
  restPage,
} from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { EletronicBar, SaveModal, AddSuccess } from "orgasms";
import { Button } from "atoms";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useForm } from "react-hook-form";
function Electronic() {
  const { register, errors, control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const Schematic = useRef(null);
  const Design = useRef(null);
  const route = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [auth, setAuth] = useState(false);
  const [step, setStep] = useState(0);
  const [init, setInit] = useState(null);
  const [option, setOption] = useState([]);
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState(false);
  const [param, setParam] = useState(null);
  const [engineState, setEngineState] = useState(null);
  const state = useSelector(({ Auth }) => Auth?.authenticated);
  const Step = useSelector(({ Pro }) => Pro?.step);
  const data = useSelector(({ Pro }) => Pro?.electronic?.schematic);
  const category = useSelector(({ Pro }) => Pro?.category);
  const popup = useSelector(({ Pro }) => Pro?.popup);
  const loader = useSelector(({ Pro }) => Pro?.loader);
  const engineData = useSelector(({ Pro }) => Pro?.importMesh);
  const sidebar = useSelector(({ Pro }) => Pro?.tempCategory);
  const handlePopup = () => dispatch(togglePopup());
  const handleLoader = () => dispatch(toggleLoader());
  const Next = () => {
    if (step <= 0) {
      let init = Schematic.current.save();
      return Promise.all([dispatch(getElectronicSchematic(init))]).then(() =>
        history.push(`${route.url}/design/${param ? param : ""}`)
      );
    } else {
      return handlePopup();
    }
  };
  const previous = () => {
    if (step !== 0) {
      return history.push(`${route.url}/schematic/${param ? param : ""}`);
    }
  };
  const handlerSubmit = async (data) => {
    handleLoader();
    let init = await Design.current.save();
    let payload = {
      component_data: init,
      ...data,
    };
    if (param) {
      payload.user_product = param;
    }
    return dispatch(getElectronicDesign(payload));
  };
  useEffect(() => {
    if (engineData) {
      setEngineState(engineData);
    }
  }, [engineData]);
  useEffect(() => {
    setOpen(popup);
  }, [popup]);
  useEffect(() => {
    if (category) {
      setOption(category);
    }
  }, [category]);
  useEffect(() => {
    dispatch(mutateElectronicSchematicState());
    return () => dispatch(restPage());
  }, []);
  useEffect(() => {
    if (Step !== step) {
      setStep(Step);
      if (Step === 2) {
        history.push(`${route.url}/success/${param ? param : ""}`);
      }
    }
  }, [Step]);
  useEffect(() => {
    setAuth(state);
  }, [state]);
  useEffect(() => {
    if (auth) dispatch(getElectronicSidebar());
  }, [auth, sidebar]);
  useEffect(() => {
    const { pathname } = location;
    if (pathname) {
      let path = pathname.split("/");
      console.log("APty", path);
      if (path.length >= 5) {
        let id = path[path.length - 1];
        id = parseInt(id);
        setParam(id);
      }
    }
    if (pathname.includes("design")) {
      dispatch(onNextElectronic());
    } else if (pathname.includes("schematic")) {
      if (step === 1) dispatch(onPreviousElectronic());
      if (step === 2) {
        dispatch(onPreviousElectronic());
        dispatch(onPreviousElectronic());
      }
    } else {
      if (step !== 2 && pathname.includes("success")) {
        dispatch(onNextElectronic());
        dispatch(onNextElectronic());
      }
    }
  }, [location.pathname]);
  useEffect(() => {
    if (data) {
      setInit(data);
    }
  }, [data]);
  useEffect(() => {
    setIndicator(loader);
  }, [loader]);
  useEffect(() => {
    if (engineState) {
      Schematic?.current.import(engineState?.component_data);
    }
  }, [engineState]);
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
      <div className="w-full">
        <EletronicBar currentStep={step} />

        <Switch>
          <Route
            exact
            path={[`${route.url}/schematic/:id`, `${route.url}/schematic`]}
            render={() => <SchematicScene ref={Schematic} />}
          />
          <Route
            exact
            path={[`${route.url}/design/:id`, `${route.url}/design`]}
            render={() => <DesignScene init={init} ref={Design} />}
          />
          <Route
            exact
            path={[`${route.url}/success/:id`, `${route.url}/success`]}
            render={() => <AddSuccess value="component" />}
          />
          <Route
            path="*"
            render={() => <Redirect to={`${route.url}/schematic`} />}
          />
        </Switch>
        <div className="w-full flex pt-4 items-center justify-between">
          {step <= 1 ? (
            <>
              <Button
                onClick={previous}
                value="Back"
                variant="contained"
                size="medium"
                color="primary"
                classes={{ root: "bg-ideeza-100 w-32" }}
              />
              <Button
                onClick={Next}
                value={step === 0 ? "Next" : "Save"}
                variant="contained"
                size="medium"
                color="primary"
                classes={{ root: "bg-ideeza-100 w-32" }}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default React.memo(Electronic);
