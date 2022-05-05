import React, { FC, useEffect } from "react";
import { useAppDispath, useAppSelector } from "../../components/hooks/redux";
import ProgressLoader from "../../components/ProgressLoader";
import SideBar from "../../components/SideBar";
import UserItems from "../../components/UserItems";
import { fetchUsers } from "../../store/reducers/actionCreators";
import "./Home.scss";

const Home: FC = () => {
  const dispatch = useAppDispath();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="content">
      <SideBar />
      <div className="content__users">
        <div className="content__users-main">
          <div className="content__users-header">
            <h1>Список пользователей</h1>
          </div>
          {error ? (
            <p>{`Произошла ошибка! Информация об ошибке: ${error} `}</p>
          ) : null}
          {isLoading ? <ProgressLoader /> : <UserItems />}
          <div className="content__found-users">
            Найдено {users.length} пользователей
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
