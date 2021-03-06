import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
    Button,
    Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgotPasswordPage.module.css";
import { authActions } from "../../services/actions/auth"

export default function ForgotPasswordPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [values, setValues] = useState({ email: "" });
    const { emailReset, error } = useSelector((store) => store.auth);
    const refreshToken = localStorage.getItem("refreshToken");


    useEffect(() => {
        if (emailReset) {
            history.replace("/reset-password");
        }
    }, [history, emailReset]);

    const onChange = ({ target }) => {
        setValues({ email: target.value });
    };

    const handleSubmit = () => {
        dispatch(authActions.forgotPassword(values.email));
    };

    const flexRow = `${styles.flexRow} text text_type_main-default text_color_inactive`;
    const errorDiv = `${styles.error} mt-6 mb-4`;


    if (refreshToken) {
        return <Redirect to={{ pathname: "/" }} />;
    }


    return (
        <div className={styles.forgotPassword}>
            <div className="text text_type_main-medium">Восстановление пароля</div>
            <div className="mb-4" />
            <Input
                onChange={onChange}
                value={values.email}
                placeholder="E-mail"
                type="email" />
            <div className="mb-6" />
            <Button type="primary" size="medium" onClick={handleSubmit}>
                Восстановить
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