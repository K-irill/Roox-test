import React, { FC } from "react";
import { Link } from "react-router-dom";
import { USER_ROUTE } from "../../Utils/consts";
import { useAppSelector } from "../hooks/redux";
import "./UserItems.scss";

const UserItems: FC = () => {
  const { users } = useAppSelector((state) => state.userReducer);

  return (
    <div className="content__users-list">
      {users.map((el) => (
        <div className="content__user-item" key={el.id}>
          <p>
            <span>ФИО:</span> {el.name}
          </p>
          <p>
            <span>город:</span> {el.address?.city}
          </p>
          <div className="user__link">
            <p>
              <span>компания:</span> {el.company?.name}
            </p>
            <Link key={el.id} to={USER_ROUTE + `/${el.id}`}>
              Подробнее
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserItems;
