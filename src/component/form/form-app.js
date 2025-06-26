import React from "react";
import UncontrolledForm, { 
    Uncontrolled, 
    NameForm, 
    NamePromoteForm,
    UncontrolledFormInput,
    Controlled,
    ControlledForm,
    TimerComponent,
    Transition,
    ExampleComponent
} from "./form-conponent";
import Card from "./card";
import Login from './Login';
import styles from './form-app.module.css';
const FormApp = () => {
    return (
        <div className={styles.main}>
            <h1>Form Application</h1>
            <Uncontrolled />
            <UncontrolledForm />
            <NameForm />
            <NamePromoteForm />
            <UncontrolledFormInput />
            <React.StrictMode>
                <ExampleComponent />
            </React.StrictMode>
            {/* <ExampleComponent/> */}
            <Card>
                <Card.Header>Form Header</Card.Header>
                <Card.Body>
                    <UncontrolledForm />
                    <NameForm />
                    <NamePromoteForm />
                    <UncontrolledFormInput />
                    <Controlled />
                    <ControlledForm />
                    {/* <TimerComponent /> */}
                    <Transition />
                    <Login/>
                </Card.Body>
                <Card.Footer>Form Footer</Card.Footer>
            </Card>
        </div>
    );
}

export default FormApp ;