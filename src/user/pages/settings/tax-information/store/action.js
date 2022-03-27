export const GET_TAX_INFORMATION =
  "GET TAX INFORMATION [IDEEZA][USER][SETTING][TAX INFORMATION]";
export const GET_TAX_INFORMATION_SUCCESS =
  "GET TAX INFORMATION [IDEEZA][USER][SETTING][TAX INFORMATION]";

export const getTaxInformation = (id) => {
  return {
    type: GET_TAX_INFORMATION,
    payload: id,
  };
};
