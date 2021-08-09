import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { validateFields } from "../../services/validate/validate";
import {
    Button,
    EmailInput,
    Input,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./registerPage.module.css";
import { authActions } from "../../services/actions/auth";


const initialValues = {
    name: "",
    email: "",
    password: "",
};

const initialInputErrors = {
    name: false,
    email: false,
    password: false,
};

const fields = ["name", "email", "password"];

export default function RegisterPage() {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState(initialInputErrors);
    const { isAuthenticated, error } = useSelector((store) => store.auth);


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

    const handleRegister = () => {
        if (!validateFields(fields, values, setInputErrors)) {
            return;
        }

        dispatch(authActions.register(values));
    };


    const flexRow = `${styles.flexRow} text text_type_main-default text_color_inactive`;
    const errorDiv = `${styles.error} mt-6 mb-8`;

    if (isAuthenticated) {
        return <Redirect to={{ pathname: "/" }} />;
    }

    return (
        <div className={styles.register}>
            <div className="text text_type_main-medium">Регистрация</div>
            <div className="mb-4" />
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
            <Button type="primary" size="medium" onClick={handleRegister}>
                Зарегистрироваться
            </Button>
            {error && <div className={errorDiv}>{error}</div>}
            {!error && <div className="mb-20" />}
            <div className={flexRow}>
                <div className="mr-1">Уже зарегистрированы?</div>

                <div>
                    <Link to="/login" className={styles.link}>
                        Войти
                    </Link>
                </div>
            </div>
        </div>
    );
};