import React, { useState, useEffect } from "react";
import { Label } from "atoms";
import { Pagination } from "molecules";
import {
  ManagementTableHeader,
  CorporationsTable,
  AddCorporationPopup,
} from "orgasms";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import { onCorporationGet } from "./store/action";
import Reducer from "./store/reducer";
function Corporations() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [AllCorporationdata, setCorporationdata] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pager, setPager] = useState({});
  const Alldata = useSelector(
    ({ CorporationReducer }) => CorporationReducer?.data
  );
  const loader = useSelector(
    ({ CorporationReducer }) => CorporationReducer?.loader
  );
  const totaldata = useSelector(
    ({ CorporationReducer }) => CorporationReducer?.count
  );
  const handleSearch = (e) => setSearch(e.target.value);
  const handlePage = (e) => {
    setPage(e);
    return dispatch(onCorporationGet({ page: e, search }));
  };
  useEffect(() => {
    setPage(1);
    dispatch(onCorporationGet({ search }));
  }, [search]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);
  useEffect(() => {
    if (Alldata) {
      setCorporationdata(Alldata);
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
        value="Corporations"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <div className="w-full bg-white rounded-lg shadow-lg">
        <ManagementTableHeader
          onClick={toggleOpen}
          iconClass="hidden"
          btnValue="Add new corp"
          btnClass="hidden"
          containerClass="flex md:flex-row flex-col items-center justify-between md:px-4 p-4 space-y-3 md:space-y-0"
        />
        <CorporationsTable loading={loading} data={AllCorporationdata} />
        <Pagination
          pager={pager}
          handlePage={handlePage}
          mainClass="pt-6 pb-12"
        />
      </div>
      <AddCorporationPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default withReducer(
  "CorporationReducer",
  Reducer
)(React.memo(Corporations));
