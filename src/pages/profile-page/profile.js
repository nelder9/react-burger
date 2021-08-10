import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    Button,
    EmailInput,
    Input,
    PasswordInput,
    Tab
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removeEmptyParams } from "../../services/utils";

import { profileActions } from "../../services/actions/profile";
import { authActions } from "../../services/actions/auth";

import styles from "./profile.module.css";
import { useHistory } from "react-router-dom";

const initialValues = {
    name: "",
    email: "",
    password: "",
};

const initialInputErrors = {
    name: false,
};

export default function ProfilePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [values, setValues] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState(initialInputErrors);
    const { user } = useSelector((store) => store.profile);


    const [current, setCurrent] = useState("/profile");
    const { refreshToken } = useSelector((store) => store.auth);

    useEffect(() => {
        dispatch(profileActions.getUser());
    }, [dispatch]);

    useEffect(() => {
        setValues((prevValues) => ({
            ...prevValues,
            ...user,
        }));
    }, [user]);

    const onChange = ({ target }) => {
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value,
        });

        setInputErrors({
            ...inputErrors,
            [name]: false,
        });
    };

    const handleSubmit = () => {
        dispatch(profileActions.updateUser(removeEmptyParams(values)));
        setValues((prevValues) => ({
            ...prevValues,
            password: "",
          }));
    };

    const tabs = [
        { title: "Профиль", path: "/profile" },
        { title: "История заказов", path: "/profile/orders" },
        { title: "Выход", path: "/logout" },
      ];

      const onTabClick = (tab) => {
        if (tab.path === "/logout") {
          dispatch(authActions.logout(refreshToken));
          <Redirect to={{ pathname: "/login" }} />
          return;
        }
    
        setCurrent(tab.path);
        history.push(tab.path);
      };

    return (
        <div className={styles.container}>

        <div className={styles.tabs}>
            {tabs.map((tab) => (
                <Tab
                key={tab.path}
                value={tab.path}
                active={current === tab.path}
                onClick={() => onTabClick(tab)}
                >
                {tab.title}
                </Tab>
            ))}
            </div>
            <div className={styles.form}>
                <Input
                    type={"text"}
                    placeholder={"Имя"}
                    onChange={onChange}
                    value={values.name}
                    name={"name"}
                    size={"default"}
                    error={inputErrors.name}
                    errorText={"Имя обязательное поле"}
                />
                <div className="mb-4" />
                <EmailInput onChange={onChange} value={values.email} name={"email"} />
                <div className="mb-4" />
                <PasswordInput
                    onChange={onChange}
                    value={values.password}
                    name={"password"}
                />
                <div className="mb-6" />
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button
                        type="primary"
                        size="medium"
                        style={{ marginRight: "16px" }}
                        onClick={handleSubmit}
                    >
                        Сохранить
                    </Button>
                </div>
            </div>
        </div>
    );
};
