import React, { FC } from "react";
import { userSlice } from "../../store/reducers/userSlice";
import { useAppDispath } from "../hooks/redux";
import "./SideBar.scss";

const SideBar: FC = () => {
  const dispatch = useAppDispath();
  const { sortUsersCity, sortUsersCompany } = userSlice.actions;

  return (
    <div className="side-bar">
      <h4>Сортировка</h4>
      <button
        className="button__city"
        onClick={() => dispatch(sortUsersCity())}
      >
        по городу
      </button>
      <button onClick={() => dispatch(sortUsersCompany())}>по компании</button>
    </div>
  );
};

export default SideBar;
