import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    EmailInput,
    Input,
    PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import { removeEmptyParams } from "../../services/utils";
import ProfileMenu from "../../components/profile-menu/profile-menu";

import { profileActions } from "../../services/actions/profile";

import styles from "./profile.module.css";

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
    const [values, setValues] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState(initialInputErrors);
    const { user } = useSelector((store) => store.profile);

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

    return (
        <div className={styles.container}>
            <ProfileMenu />
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
