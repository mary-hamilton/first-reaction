import {Grid} from "@mui/material";

const Person = ({ person }) => {
    return <Grid container direction="column" p={1} >
                <Grid item>
                    <p>{`First name: ${person.firstName}`}</p>
                </Grid>
                <Grid item>
                    <p>{`Surname: ${person.surname}`}</p>
                </Grid>
            </Grid>
}

export default Person