import { Formik } from "formik";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";
import "./UserPage.scss";
import * as Yup from "yup";
import { useAppDispath, useAppSelector } from "../../components/hooks/redux";
import { fetchOneUser } from "../../store/reducers/actionCreators";
import ProgressLoader from "../../components/ProgressLoader";

interface MyFormValues {
  firstName: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  street: string | undefined;
  city: string | undefined;
  zipCode: string | undefined;
  phone: string | undefined;
  webSite: string | undefined;
  comment: string | undefined;
}

const UserPage: FC = () => {
  const { oneUser, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispath();
  const { id } = useParams();
  const [edit, setEdit] = useState(true);

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch, id]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    userName: Yup.string().required(),
    email: Yup.string().required(),
    street: Yup.string().required(),
    city: Yup.string().required(),
    zipCode: Yup.string().required(),
    phone: Yup.string().required(),
    webSite: Yup.string().required(),
  });

  const initialValues: MyFormValues = {
    firstName: oneUser?.name ? oneUser?.name : "",
    userName: oneUser?.username ? oneUser?.username : "",
    email: oneUser?.email ? oneUser?.email : "",
    street: oneUser.address?.street ? oneUser.address.street : "",
    city: oneUser.address?.city ? oneUser.address.city : "",
    zipCode: oneUser.address?.zipcode ? oneUser.address.zipcode : "",
    phone: oneUser?.phone ? oneUser?.phone : "",
    webSite: oneUser?.website ? oneUser?.website : "",
    comment: "",
  };

  return (
    <div className="main__user-edit">
      <SideBar />
      <div className="content__user-edit">
        <div className="content__user-header">
          <h2>Профиль пользоваетля</h2>
          <button
            onClick={() => {
              setEdit(false);
            }}
          >
            Редактироввать
          </button>
        </div>
        <div className="content__user-form">
          {error ? (
            <p>{`Произошла ошибка! Информация об ошибке: ${error} `}</p>
          ) : null}
          {isLoading ? (
            <ProgressLoader />
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <div className="content__user-form_formik">
                    <div
                      className={
                        props.errors.firstName && props.touched.firstName
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.firstName}
                      />
                    </div>

                    <div
                      className={
                        props.errors.userName && props.touched.userName
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">User name</label>
                      <input
                        id="userName"
                        name="userName"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.userName}
                      />
                    </div>

                    <div
                      className={
                        props.errors.email && props.touched.email
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                      />
                    </div>

                    <div
                      className={
                        props.errors.street && props.touched.street
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">Street</label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.street}
                      />
                    </div>

                    <div
                      className={
                        props.errors.city && props.touched.city
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">City</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.city}
                      />
                    </div>

                    <div
                      className={
                        props.errors.zipCode && props.touched.zipCode
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">Zip code</label>
                      <input
                        id="zipCode"
                        name="zipCode"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.zipCode}
                      />
                    </div>

                    <div
                      className={
                        props.errors.phone && props.touched.phone
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.phone}
                      />
                    </div>

                    <div
                      className={
                        props.errors.webSite && props.touched.webSite
                          ? "formik-component_error"
                          : "formik-component"
                      }
                    >
                      <label htmlFor="firstName">Website</label>
                      <input
                        id="webSite"
                        name="webSite"
                        type="text"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.webSite}
                      />
                    </div>

                    <div className="formik-component">
                      <label htmlFor="firstName">Comment</label>
                      <textarea
                        id="comment"
                        name="comment"
                        disabled={edit}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.comment}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={edit ? true : !props.isValid && !props.dirty}
                  >
                    Отправить
                  </button>
                </form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
