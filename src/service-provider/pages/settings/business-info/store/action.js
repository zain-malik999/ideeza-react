export const GET_BUSINESS_INFORMATION =
  "GET BUSINESS INFORMATION[IDEEZA][SERVICE-PROVIDER][SETTINGS][BUSINESS-INFO]";
export const GET_BUSINESS_INFORMATION_SUCCESS =
  "GET BUSINESS INFORMATION[IDEEZA][SERVICE-PROVIDER][SETTINGS][BUSINESS-INFO]";

onBusinessInformationGet = () => {
  return {
    type: GET_BUSINESS_INFORMATION,
  };
};

onBusinessInformationGet = () => {
  return {
    type: GET_BUSINESS_INFORMATION_SUCCESS,
  };
};
