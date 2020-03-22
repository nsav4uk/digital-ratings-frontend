import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { connect, ConnectedProps } from "react-redux";
import { Dropdown } from "../../components";
import withTranslation from "../../components/translation/withTranslation";
import { RootState } from "../../store";
import { logoutUser } from "../../store/user/actions";
import { changeLanguage } from "../../store/app/actions";

const mapStateToProps = (state: RootState) => ({
  user: state.user.currentUser,
});

const dispatchProps = {
  logoutUser,
  changeLanguage,
};

const connector = connect(
  mapStateToProps,
  dispatchProps
);

type PropsFromRedux = ConnectedProps<typeof connector>

const Navigation: React.FC<PropsFromRedux> = ({ user, logoutUser, changeLanguage }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Digital Ratings</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" role="button"><FormattedMessage id="home"/></Link>
        </Nav>
        <Nav>
          <Dropdown items={ ['Uk', 'En'] } changeLanguage={changeLanguage}/>
          { user.userId
            ? <Link to="/logout" className="nav-link" onClick={logoutUser} role="button"><FormattedMessage id="logout"/></Link>
            : <Link to="/login" className="nav-link" role="button"><FormattedMessage id="login"/></Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default withTranslation(connector(Navigation));
