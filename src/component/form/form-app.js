import React from "react";
import UncontrolledForm, { 
    Uncontrolled, 
    NameForm, 
    NamePromoteForm,
    UncontrolledFormInput,
    Controlled,
    ControlledForm,
    TimerComponent,
    Transition
} from "./form-conponent";
import Card from "./card";
import Login from './Login'
const FormApp = () => {
    return (
        <>
            <h1>Form Application</h1>
            <Uncontrolled />
            <UncontrolledForm />
            <NameForm />
            <NamePromoteForm />
            <UncontrolledFormInput />
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
        </>
    );
}

export default FormApp ;