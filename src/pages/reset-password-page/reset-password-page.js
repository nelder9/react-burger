import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { validateFields } from "../../services/validate/validate";
import { authActions } from "../../services/actions/auth";
import {
    Button,
    Input,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./resetPasswordPage.module.css";

const initialValues = {
    password: "",
    token: "",
};

const initialInputErrors = {
    token: false,
};

const fields = ["token"];

export default function ResetPasswordPage() {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialValues);
    const [inputErrors, setInputErrors] = useState(initialInputErrors);
    const { validToken, emailReset, error } = useSelector((store) => store.auth);

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
        console.log(values, 'это уходит')
        if (!validateFields(fields, values, setInputErrors)) {
            return;
        }

        dispatch(authActions.resetPassword(values));
        dispatch(authActions.setEmailReset(false));
    };



    const flexRow = `${styles.flexRow} text text_type_main-default text_color_inactive`;
    const errorDiv = `${styles.error} mt-6 mb-8`;

    if (validToken) {
        return <Redirect to={{ pathname: "/" }} />;
    }

    if (!emailReset) {
        return <Redirect to={{ pathname: "/forgot-password" }} />;
    }

    return (
        <div className={styles.resetPassword}>
            <div className="text text_type_main-medium">Восстановление пароля</div>
            <div className="mb-4" />
            <PasswordInput
                onChange={onChange}
                value={values.password}
                name={"password"}
            />
            <div className="mb-4" />
            <Input
                type={"text"}
                placeholder={"Введите код из письма"}
                onChange={onChange}
                value={values.token}
                name={"token"}
                size={"default"}
                error={inputErrors.token}
                errorText={"Код обязательное поле"}
            />
            <div className="mb-6" />
            <Button type="primary" size="medium" onClick={handleSubmit}>
                Сохранить
            </Button>

            {error && <div className={errorDiv}>{error}</div>}
            {!error && <div className="mb-20" />}
            <div className={flexRow}>
                <div className="mr-1">Вспомнили пароль?</div>

                <div>
                    <Link to="/login" className={styles.link}>
                        Войти
                    </Link>
                </div>
            </div>
        </div>
    );
};