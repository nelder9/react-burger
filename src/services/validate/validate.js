
export const validateFields = (fields, values, setInputErrors) => {
    let isValid = true;

    fields.forEach((name) => {
        if (!values[name] || values[name].trim() === "") {
            isValid = false;

            setInputErrors((prevValues) => ({
                ...prevValues,
                [name]: true,
            }));
        }
    });

    return isValid;
};