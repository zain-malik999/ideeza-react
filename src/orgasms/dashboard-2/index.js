import React from "react";
import { Button } from "atoms";
import { DashboardCard } from "molecules";
function Dashboard2({ contact, score, projects }) {
  return (
    <>
      <div className="flex justify-between items-end md:gap-x-4">
        <DashboardCard
          className="py-3 md:px-2 px-1 w-1/4"
          value={projects}
          text="Projects"
          iconSet={
            <>
              <img
                src="/assets/images/layer-group-solid.png"
                className="md:w-6 w-4"
                alt=""
                srcset=""
              />
            </>
          }
        />
        <DashboardCard
          className="py-3 md:px-2 px-1 w-1/4"
          value={contact}
          text="Contacts"
          iconSet={
            <>
              <img
                src="/assets/images/people.png"
                className="md:w-7 w-5"
                alt=""
                srcset=""
              />
            </>
          }
        />
        <DashboardCard
          className="py-3 md:px-2 px-1 w-1/4"
          value={score}
          text="My score"
          iconSet={
            <>
              <img
                src="/assets/images/radio-button.png"
                className="md:w-6 w-4"
                alt=""
                srcset=""
              />
            </>
          }
        />
        <Button
          value="Master"
          size="large"
          classes={{
            root:
              "capitalize text-white bg-ideeza-100 font-medium py-1 px-4 tracking-tighter text-sm",
          }}
        />
      </div>
    </>
  );
}

export default Dashboard2;
