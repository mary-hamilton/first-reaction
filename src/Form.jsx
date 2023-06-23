import {useState} from "react";
import {Button, Container, Grid, TextField} from "@mui/material";

const Form = ({ addPeople }) => {

    const [ formValues, setFormValues ] = useState(
        {
            firstName: "",
            surname: "",
        }
    )

    const [ errors, setErrors ] = useState(
        {
            firstName: [],
            surname: []
        }
    );

    const validate = (fieldName, fieldValue) => {
        let currentErrors = [];
        if (fieldValue === "") {
            currentErrors.push("Field cannot be blank");
        }
        return currentErrors;
    }

    const handleBlur = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        setErrors(
            {
                ...errors,
                [fieldName]: validate(fieldName, fieldValue)
            }
        )
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addPeople(formValues);
    }

    const handleChange = (event) => {
        setFormValues(
            {
                ...formValues,
                [event.target.name]: event.target.value,
            }
        )
    }


    return (
        <Container>
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" p={6} spacing={2}>
                <Grid item>
                    <TextField
                        fullWidth
                        name="firstName"
                        label="First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={formValues.firstName}
                        error={errors.firstName.length > 0}
                        helperText={errors.firstName.join(", ")}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        name="surname"
                        label="Surname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={formValues.surname}
                        error={errors.surname.length > 0}
                        helperText={errors.surname.join(", ")}
                    />
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </form>
        </Container>
    )
}

export default Form;

