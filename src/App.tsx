import React from 'react';
import Navigation from "./containers/navigation/Navigation";
import Router from "./components/router/Router";
import { RootState } from "./store";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  user: state.user.currentUser,
});

const connector = connect(
  mapStateToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>

const App: React.FC<PropsFromRedux> = ({ user }) => {
  return (
    <div>
      <Navigation/>
      <Router isLoggedIn={user.userId !== undefined}/>
    </div>
  );
};

export default connector(App);
