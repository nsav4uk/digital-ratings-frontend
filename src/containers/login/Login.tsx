import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import withTranslation from "../../components/translation/withTranslation";
import { connect, ConnectedProps } from "react-redux";
import { loginUser } from "../../store/user/actions";

const dispatchProps = {
  loginUser,
};

const connector = connect(
  null,
  dispatchProps
);

type PropsFromRedux = ConnectedProps<typeof connector>

const Login: React.FC<PropsFromRedux> = ({ loginUser }) => {
  const [fields, setFields] = useState({
    usernameValue: '',
    passwordValue: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (fields.usernameValue.trim().length === 0 || fields.passwordValue.trim().length === 0) {
      return;
    }
    loginUser({ username: fields.usernameValue, password: fields.passwordValue });
  };

  return (
    <Container>
      <Row>
        <Col md={ 3 }/>
        <Col md={ 6 }>
          <h3 className="text-center"><FormattedMessage id="login"/></h3>
          <Form onSubmit={ handleSubmit }>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><FormattedMessage id="email"/></Form.Label>
              <FormattedMessage id="email">
                { (msg: string) => (
                  <Form.Control type="email" name="usernameValue" onChange={ handleChange } placeholder={ msg }/>
                ) }
              </FormattedMessage>
              <Form.Text className="text-muted">
                <FormattedMessage id="notation"/>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label><FormattedMessage id="password"/></Form.Label>
              <FormattedMessage id="password">
                { (msg: string) => (
                  <Form.Control type="password" name="passwordValue" onChange={ handleChange } placeholder={ msg }/>
                ) }
              </FormattedMessage>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <FormattedMessage id="rememberMe">
                { (msg: string) => (
                  <Form.Check type="checkbox" label={ msg }/>
                ) }
              </FormattedMessage>
            </Form.Group>
            <Button variant="primary" type="submit">
              <FormattedMessage id="submit"/>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default withTranslation(connector(Login));
