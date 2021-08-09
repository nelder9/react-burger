import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
    Button,
    EmailInput,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { authActions } from "../../services/actions/auth";
import styles from './loginPage.module.css';

const initialValues = {
    email: "",
    password: "",
};

export default function LoginPage() {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialValues);
    const { location } = useHistory();
    const { validToken, error } = useSelector((store) => store.auth);



    const onChange = ({ target }) => {
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value,
        });
    };



    const flexRow = `${styles.flexRow} text text_type_main-default text_color_inactive`;
    const errorDiv = `${styles.error} mt-6 mb-8`;


    const handleLogin = () => {
        dispatch(authActions.login(values));
    };

    if (validToken) {
        console.log(2)
        return (
          <Redirect to={{ pathname: location.state?.from?.pathname || "/" }} />
        );
      }


    return (
        <div className={styles.login}>
            <div className="text text_type_main-medium">Вход</div>
            <div className="mb-4" />
            <EmailInput
                onChange={onChange}
                value={values.email}
                name={"email"} />
            <div className="mb-4" />
            <PasswordInput
                onChange={onChange}
                value={values.password}
                name={"password"}
            />
            <div className="mb-6" />
            <Button type="primary" size="medium" onClick={handleLogin}>
                Войти
            </Button>
            {error && <div className={errorDiv}>{error}</div>}
            {!error && <div className="mb-20" />}
            <div className={flexRow}>
                <div className="mr-1">Вы - новый пользователь?</div>

                <div>
                    <Link to="/register" className={styles.link}>
                        Зарегистрироваться
                    </Link>
                </div>
            </div>
            <div className="mb-4" />
            <div className={flexRow}>
                <div className="mr-1">Забыли пароль?</div>

                <div>
                    <Link to="/forgot-password" className={styles.link}>
                        Восстановить пароль
                    </Link>
                </div>
            </div>
        </div>
    );
}
