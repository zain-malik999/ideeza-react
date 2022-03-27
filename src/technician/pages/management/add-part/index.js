import React, { useEffect, useState } from "react";
import { Label } from "atoms";
import { Pagination, TabsMolecule } from "molecules";
import { AddedElectronicTable, AddPartsTableHeader } from "orgasms";
import { withReducer } from "service";
import { useDispatch, useSelector } from "react-redux";
import { onPartsGet } from "./store/action";
import Reducer from "./store/reducer";
function AddPart() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [Allpartsdata, setpartsdata] = useState([]);
  const [search, setSearch] = useState("");
  const [pager, setPager] = useState({});
  const [page, setPage] = useState(1);
  const Alldata = useSelector(({ AddPartsReducer }) => AddPartsReducer?.data);
  const loader = useSelector(({ AddPartsReducer }) => AddPartsReducer?.loader);
  const totalData = useSelector(
    ({ AddPartsReducer }) => AddPartsReducer?.count
  );
  const handleSearch = (e) => setSearch(e.target.value);
  const handlePage = (e) => {
    setPage(e);
    return dispatch(onPartsGet({ page: e, search }));
  };
  useEffect(() => {
    setPage(1);
    dispatch(onPartsGet({ search }));
  }, [search]);
  useEffect(() => {
    setLoading(loader);
  }, [loader]);
  useEffect(() => {
    if (Alldata) {
      setpartsdata(Alldata);
    }
  }, [Alldata]);
  useEffect(() => {
    setPager({
      ...pager,
      count: Math.ceil(totalData / 1),
    });
  }, [totalData]);
  useEffect(() => {
    setPager({
      ...pager,
      page,
    });
  }, [page]);
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <div className="pt-4">
      <Label
        value="Manage Electronic, Code & Cover Parts"
        classes={{
          root: "text-current tracking-tight font-sans font-bold pb-3 text-lg",
        }}
      />
      <TabsMolecule
        index={index}
        handleChange={handleChange}
        tabsClasses="md:w-1/3"
        tabClasses="text-sm text-left font-sans whitespace-nowrap tracking-tight news-tabs focus:text-current transform-none text-gray-300"
        tabsData={[
          {
            name: "Added Electronics",
            component: (
              <div className="w-full bg-white rounded-lg shadow-lg space-y-3">
                <AddPartsTableHeader handleSearch={handleSearch} />
                <AddedElectronicTable loading={loading} data={Allpartsdata} />
                <Pagination
                  pager={pager}
                  handlePage={handlePage}
                  mainClass="py-6"
                />
              </div>
            ),
          },
          {
            name: "Added Code",
            component: (
              <div className="w-full bg-white rounded-lg shadow-lg space-y-3">
                <AddPartsTableHeader handleSearch={handleSearch} />
                <AddedElectronicTable loading={loading} data={Allpartsdata} />
                <Pagination
                  pager={pager}
                  handlePage={handlePage}
                  mainClass="py-6"
                />
              </div>
            ),
          },
          {
            name: "Added Cover",
            component: (
              <div className="w-full bg-white rounded-lg shadow-lg space-y-3">
                <AddPartsTableHeader handleSearch={handleSearch} />
                <AddedElectronicTable loading={loading} data={Allpartsdata} />
                <Pagination
                  pager={pager}
                  handlePage={handlePage}
                  mainClass="py-6"
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default withReducer("AddPartsReducer", Reducer)(React.memo(AddPart));
