import React, { useEffect, useState } from "react";
import { Label, Button } from "atoms";
import { Actions } from "service";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { LoginPopup, SignUpPopup } from "orgasms";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();
  const User = useSelector(({ Auth }) => Auth?.user);
  const toggleOpen = () => setOpen((state) => !state);
  const toggleSignup = () => setSignup((state) => !state);
  const push = (e) => history.push("/user/dashboard/home");
  const routing = (e) => history.push(e);
  const handleLogin = (e) =>
    Promise.all([dispatch(Actions.onLogin(e))]).then(() => toggleOpen());
  useEffect(() => {
    if (User) setUser(User);
  }, [User]);
  return (
    <div className="w-full">
      <LoginPopup
        handleLogin={handleLogin}
        open={open}
        toggleOpen={toggleOpen}
      />
      <SignUpPopup open={signup} toggleOpen={toggleSignup} />

      <div className="xl:px-16 md:px-10 px-6 py-3 xl:h-20 h-16 pb-5 flex items-center justify-between w-full">
        <Link to="/" className="w-32">
          <img src="/assets/images/logo/logo.png" width="90px" />
        </Link>
        <div className="lg:hidden pt-3 flex items-center justify-end w-full float-right">
          <Button
            value={
              <>
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </>
            }
            className="block text-white hover:text-white focus:text-white focus:outline-none"
          />
        </div>
        <div className="lg:flex items-center justify-end xl:pt-3 pt-2 hidden">
          <div className="flex items-center justify-end text-white xl:pr-8 pr-1">
            <Label
              onClick={routing.bind(this, "collaboration")}
              value="I'm manufacturer"
              className="px-1 xl:pr-12 text-white whitespace-nowrap text-sm font-sans cursor-pointer"
            />
            <Label
              onClick={routing.bind(this, "about")}
              value="About"
              className="px-1 xl:px-4 text-white whitespace-nowrap text-sm font-sans cursor-pointer"
            />
            <Label
              onClick={routing.bind(this, "blog")}
              value="Blog"
              className="px-1 xl:px-4 text-white whitespace-nowrap text-sm font-sans cursor-pointer"
            />
            <Label
              onClick={routing.bind(this, "success-story")}
              value="Success story"
              className="px-1 xl:px-4 text-white whitespace-nowrap text-sm font-sans cursor-pointer"
            />
            <Button
              onClick={routing.bind(this, "freelancer")}
              value="Start project"
              className="text-white transform-none rounded-full whitespace-nowrap bg-secondary xl:py-1 py-2 text-xs xl:leading-8 xl:px-5 px-3 xl:mx-3 outline-none border-0"
            />
            {user ? (
              <div onClick={push} className="flex pointer items-center mx-2">
                <div className="xl:w-8 w-6 xl:h-8 h-6 flex items-center justify-center bg-gray-150 rounded-full">
                  <span className="capitalize text-base font-sans text-black-100">
                    {user ? (user?.first_name)[0] : ""}
                  </span>
                </div>
                <span className="capitalize text-white text-sm whitespace-nowrap font-sans tracking-tight ml-2">{`${user?.first_name} ${user?.last_name}`}</span>
              </div>
            ) : (
              <>
                <Label
                  onClick={toggleSignup}
                  value="Sign up"
                  className="px-4 xl:px-4 text-white text-sm font-sans cursor-pointer"
                />
                <Label
                  onClick={toggleOpen}
                  value="Log in"
                  className="px-4 xl:px-4 text-white text-sm font-sans cursor-pointer"
                />
              </>
            )}
          </div>
          <div className="flex items-center xl:space-x-3 space-x-2 justify-end icon">
            <svg
              id="facebook-app-logo"
              className="w-5 h-5 svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.609 27.609"
            >
              <path
                id="Path_49"
                data-name="Path 49"
                d="M26.084,0H1.524A1.524,1.524,0,0,0,0,1.525v24.56A1.524,1.524,0,0,0,1.524,27.61H14.746V16.918h-3.6V12.751h3.6V9.678c0-3.565,2.177-5.508,5.358-5.508a29.841,29.841,0,0,1,3.214.164V8.06H21.113c-1.73,0-2.063.822-2.063,2.028v2.66h4.127l-.54,4.167H19.049V27.609h7.035a1.525,1.525,0,0,0,1.525-1.523V1.524A1.524,1.524,0,0,0,26.084,0Z"
                transform="translate(0 -0.001)"
                fill="#fff"
              />
            </svg>
            <svg
              id="instagram-logo"
              className="w-5 h-5 svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.365 27.365"
            >
              <path
                id="Path_50"
                data-name="Path 50"
                d="M19.813,0H7.552A7.56,7.56,0,0,0,0,7.552V19.813a7.56,7.56,0,0,0,7.552,7.552H19.813a7.56,7.56,0,0,0,7.552-7.552V7.552A7.56,7.56,0,0,0,19.813,0Zm5.124,19.813a5.13,5.13,0,0,1-5.124,5.124H7.552a5.129,5.129,0,0,1-5.124-5.124V7.552A5.13,5.13,0,0,1,7.552,2.428H19.813a5.13,5.13,0,0,1,5.124,5.124V19.813Z"
                fill="#fff"
              />
              <path
                id="Path_51"
                data-name="Path 51"
                d="M48.019,40.97a7.051,7.051,0,1,0,7.051,7.051A7.059,7.059,0,0,0,48.019,40.97Zm0,11.674a4.623,4.623,0,1,1,4.623-4.623A4.628,4.628,0,0,1,48.019,52.644Z"
                transform="translate(-34.337 -34.338)"
                fill="#fff"
              />
              <path
                id="Path_52"
                data-name="Path 52"
                d="M120.7,28.251a1.78,1.78,0,1,0,1.259.521A1.788,1.788,0,0,0,120.7,28.251Z"
                transform="translate(-99.672 -23.678)"
                fill="#fff"
              />
            </svg>
            <svg
              id="linkedin-logo"
              className="w-5 h-5 svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.365 27.365"
            >
              <g id="post-linkedin">
                <path
                  id="Path_53"
                  data-name="Path 53"
                  d="M24.629,0H2.737A2.745,2.745,0,0,0,0,2.737V24.629a2.745,2.745,0,0,0,2.737,2.737H24.629a2.745,2.745,0,0,0,2.737-2.737V2.737A2.745,2.745,0,0,0,24.629,0ZM8.21,23.26H4.1V10.946h4.1ZM6.157,8.62A2.463,2.463,0,1,1,8.62,6.157,2.453,2.453,0,0,1,6.157,8.62Zm17.1,14.64h-4.1V16.009a2.052,2.052,0,0,0-4.1,0V23.26h-4.1V10.946h4.1v1.642a4.42,4.42,0,0,1,3.421-1.916,4.848,4.848,0,0,1,4.789,4.789Z"
                  fill="#fff"
                />
              </g>
            </svg>
            <svg
              id="twitter-logo-on-black-background"
              className="w-5 h-5 svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27.365 27.365"
            >
              <g id="post-twitter">
                <path
                  id="Path_54"
                  data-name="Path 54"
                  d="M24.629,0H2.737A2.745,2.745,0,0,0,0,2.737V24.629a2.745,2.745,0,0,0,2.737,2.737H24.629a2.745,2.745,0,0,0,2.737-2.737V2.737A2.745,2.745,0,0,0,24.629,0ZM21.482,9.988c-.137,6.294-4.1,10.672-10.125,10.946a9.959,9.959,0,0,1-5.884-1.642,7.264,7.264,0,0,0,5.336-1.505,3.7,3.7,0,0,1-3.421-2.6,5.519,5.519,0,0,0,1.505,0A3.727,3.727,0,0,1,6.02,11.493a2.758,2.758,0,0,0,1.505.41A4.046,4.046,0,0,1,6.431,6.978a10.842,10.842,0,0,0,7.525,3.831C13,6.978,18.2,4.926,20.25,7.525A9.218,9.218,0,0,0,22.576,6.7a3.868,3.868,0,0,1-1.505,2.052,7.843,7.843,0,0,0,1.916-.547C22.85,8.894,22.166,9.441,21.482,9.988Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
