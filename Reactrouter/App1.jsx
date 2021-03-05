import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Services from "./Services";
import User from "./User";

const App1 = () => {
    const Name = () => {
        return <h1>HELLO,NAME PAGE</h1>
    };
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path='/' component={() =>
                    <About name="ABOUT" />
                } />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/user/:name' component={User} />

                <Route exact path='/services' render={() =>
                    <Services name="SERVICES" />
                } />
                <Route path='/contact/Name' component={Name} />

            </Switch>
            {/* <About />
        <Contact /> */}

        </>);
};


export default App1;