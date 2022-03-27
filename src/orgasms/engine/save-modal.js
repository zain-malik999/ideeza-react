import React from "react";
import { Modal, Label, Input, Select, Button } from "atoms";
function SaveModal(props) {
  const {
    register,
    errors,
    control,
    handleSubmit,
    options,
    handlerSubmit,
    loader,
    open,
    close,
    title,
  } = props;
  return (
    <Modal
      open={open}
      close={close}
      width="xs"
      className={{ paper: "rounded-xl px-10 py-5" }}
      header={
        <Label
          variant="h6"
          value={`Save ${title}`}
          className="text-ideeza-100 font-sans font-semibold"
        />
      }
      content={
        <form
          onSubmit={handleSubmit(handlerSubmit)}
          className="w-full flex items-center justify-center flex-col"
        >
          <Input
            name="name"
            error={errors}
            register={register({ required: "Name Is Required" })}
            placeholder="Name"
            className={{ root: "border mb-3 mt-5 border-gray-135 px-1 py-1" }}
            containerClass="w-full "
          />
          <Select
            ref={register({ required: "Category Is Compulsory" })}
            name="category"
            placeholder="Category"
            error={errors}
            options={options}
            control={control}
            isControlled={control}
          />
          <Select
            ref={register({ required: "status Is Compulsory" })}
            name="status"
            containerClass="my-3"
            error={errors}
            placeholder="Status"
            isControlled={control}
            control={control}
            options={status}
          />

          <div className="w-full items-center flex">
            <Button
              value="Save"
              disabled={Object.keys(errors).length !== 0}
              size="medium"
              color="primary"
              type="submit"
              variant="contained"
              classes={{ root: "w-32 mr-2" }}
              loading={loader}
            />
            <Button
              onClick={close}
              value="Cancel"
              size="medium"
              classes={{ root: "border border-solid" }}
              color="primary"
            />
          </div>
        </form>
      }
    />
  );
}
SaveModal.defaultProps = {
  title: "Electronics",
};
export default SaveModal;
const status = [
  { name: "Public", value: "public" },
  { name: "Private", value: "private" },
];
