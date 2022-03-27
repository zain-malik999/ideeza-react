import React from "react";
import { Label, Button } from "atoms";
import { useForm } from "react-hook-form";
import {
  BusinessInformation,
  Gallery,
  BussinessInfoCard,
  BussinessAdditional,
  BusinessMachines,
} from "orgasms";

function BusinessInfo() {
  const { register, errors, handleSubmit, control, formState } = useForm();
  const handlerSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handlerSubmit)}>
      <div className="lg:w-8/12 xl:w-7/12 w-full pt-3 space-y-12 flex flex-col items-center">
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold flex justify-between items-center w-full",
            }}
            value={
              <>
                Business Informations{" "}
                <span className="text-gray-900 text-base font-normal">
                  *Requried
                </span>
              </>
            }
          />
          <BusinessInformation error={errors} control={control} />
        </div>
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold w-full",
            }}
            value="Gallery"
          />
          <Gallery />
        </div>
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold flex justify-between items-center w-full",
            }}
            value={
              <>
                Machines{" "}
                <span className="text-gray-900 text-base font-normal">
                  *Requried
                </span>
              </>
            }
          />
          <BusinessMachines
            error={errors}
            control={control}
            register={register}
          />
        </div>
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold w-full",
            }}
            value="Services"
          />
          <BussinessInfoCard
            placeholder="Choose services here..."
            colContainer="hidden"
            error={errors}
            control={control}
          />
        </div>
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold w-full",
            }}
            value="Shipping Method"
          />
          <BussinessInfoCard
            placeholder="Choose your method"
            gridContainer="hidden"
            error={errors}
            register={register}
            control={control}
          />
        </div>
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold w-full",
            }}
            value="Certifications"
          />
          <BussinessInfoCard
            placeholder="Choose certifications here..."
            gridContainer="hidden"
            error={errors}
            register={register}
            control={control}
          />
        </div>
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold w-full",
            }}
            value="Additional Info"
          />
          <div className="bg-white shadow rounded-lg p-4">
            <BussinessAdditional
              placeholder="Choose skills here..."
              placeholder2="Choose equipment here..."
              value="Skills"
              value2="Equipment"
              skillValue="ADM-Engineering"
              equipmentValue="ADM-Customized Volume Manufacturing"
              error={errors}
              register={register}
              control={control}
            />
          </div>
        </div>
        <div className="w-full">
          <Label
            classes={{
              root:
                "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold w-full",
            }}
            value="Work with us"
          />
          <BussinessInfoCard
            placeholder="Choose companies..."
            gridContainer="hidden"
            value=""
            colContainer="-mt-4"
            img={<img src="/assets/images/google-logo.png" alt="" />}
            error={errors}
            control={control}
          />
        </div>
        <div className="flex justify-center w-full">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={!formState.isDirty}
            value="Save"
            classes={{
              root: " px-16 tracking-tight capitalize",
            }}
          />
        </div>{" "}
      </div>
    </form>
  );
}

export default BusinessInfo;
