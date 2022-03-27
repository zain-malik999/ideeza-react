import React from "react";
import { Label } from "atoms";
import { LoginHistoryTable } from "../index";
import { TableContainer } from "@material-ui/core";
function LoginHistory({ data }) {
  {
    return (
      <div className="rounded-lg bg-white shadow-md py-3 md:px-6 px-4">
        <Label
          value="Login History"
          className="font-bold font-sans text-gray-300 text-lg pb-4"
        />
        <TableContainer>
          <LoginHistoryTable data={data} />
        </TableContainer>
        <Label
          value="If you see something unfamiliar change your password."
          className="font-sans tracking-tight text-gray-850 text-sm text-right py-2"
        />
      </div>
    );
  }
}
export default LoginHistory;
