import React from "react";
import { Switch, Route } from "react-router";
import FailRoute from "./FailRoute";
import { Login, Main, Teacher } from "../../containers";

type Props = {
  isLoggedIn?: boolean;
  role?: "teacher" | "pupil";
}

const Router: React.FC<Props> = ({ isLoggedIn, role }) => {
  return (
    <Switch>
      <Route exact path="/" component={ Main }/>
      { !isLoggedIn && <Route path="/login" component={ Login }/> }
      { isLoggedIn && role && <>
        { role === 'teacher' && <Route path="/teacher" component={ Teacher }/> }
        { role === 'pupil' && <Route path="/pupil" component={ Teacher }/> }
      </> }
      <Route path="*" component={ FailRoute }/>
    </Switch>
  )
};

export default Router;
