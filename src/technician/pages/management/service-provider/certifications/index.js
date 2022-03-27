import React, { useState, useEffect } from "react";
import { Label } from "atoms";
import { Pagination } from "molecules";
import {
  ManagementTableHeader,
  CertificationsTable,
  AddCertificationsPopup,
} from "orgasms";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import Reducer from "./store/reducer";
import { onCertificationGet } from "./store/action";
function Certifications() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pager, setPager] = useState({});
  const [AllCertificationdata, SetCertificationdata] = useState([]);
  const Alldata = useSelector(
    ({ CertificationReducer }) => CertificationReducer?.data
  );
  const loader = useSelector(
    ({ CertificationReducer }) => CertificationReducer?.loader
  );
  const totaldata = useSelector(
    ({ CertificationReducer }) => CertificationReducer?.count
  );
  const handleSearch = (e) => setSearch(e.target.value);
  const handlePage = (e) => {
    setPage(e);
    return dispatch(onCertificationGet({ page: e, search }));
  };
  useEffect(() => {
    setPage(1);
    dispatch(onCertificationGet({ search }));
  }, [search]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);
  useEffect(() => {
    if (Alldata) {
      SetCertificationdata(Alldata);
    }
  }, [Alldata]);
  useEffect(() => {
    setPager({
      ...pager,
      count: Math.ceil(totaldata / 1),
    });
  }, [totaldata]);
  useEffect(() => {
    setPager(
      {
        ...pager,
        page,
      },
      [page]
    );
  });
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <div className="pt-4">
      <Label
        value="Certifications"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <ManagementTableHeader
          onClick={toggleOpen}
          handleSearch={handleSearch}
          iconClass="hidden"
          btnValue="Add new cert"
          btnClass="hidden"
          containerClass="flex md:flex-row flex-col items-center justify-between md:px-4 p-4 space-y-3 md:space-y-0"
        />
        <CertificationsTable loading={loading} data={AllCertificationdata} />
        <Pagination
          pager={pager}
          handlePage={handlePage}
          mainClass="pt-6 pb-12"
        />
      </div>
      <AddCertificationsPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default withReducer(
  "CertificationReducer",
  Reducer
)(React.memo(Certifications));
