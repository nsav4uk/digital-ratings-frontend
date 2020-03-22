import React from "react";
import { FormattedMessage } from "react-intl";
import { NavDropdown } from "react-bootstrap";
import { Language } from "../../store/app/types";

type Props = {
  items: string[];
  changeLanguage: (lang: Language) => void;
}

const Dropdown: React.FC<Props> = ({ items, changeLanguage }) => {
  return (
    <FormattedMessage id="language">
      { (msg: string) => (
        <NavDropdown title={ msg } id="basic-nav-dropdown">
          { items.map((item, key) => (
            <NavDropdown.Item
              key={key}
              disabled={ item.toLocaleLowerCase() === localStorage.getItem("locale") }
              onClick={ () => changeLanguage({ language: item.toLocaleLowerCase() }) }
            >
              { item }
            </NavDropdown.Item>
          )) }
        </NavDropdown>
      ) }
    </FormattedMessage>
  );
};

export default Dropdown;
