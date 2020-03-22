import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../../messages/messages';
import { RootState } from "../../store";
import { connect } from "react-redux";

interface InjectedProps {
  language: number;
}

export default function withTranslation<BaseProps extends InjectedProps>(
  WrappedComponent: React.ComponentType<BaseProps>
) {
  const mapStateToProps = (state: RootState) => ({
    language: state.app.language.language,
  });

  type HocProps = ReturnType<typeof mapStateToProps>;

  class HOC extends Component<HocProps> {
    render() {
      const { language, ...restProps } = this.props;
      const mess: { [key: string]: {} } = messages;
      return (
        <IntlProvider
          textComponent={ React.Fragment }
          locale={ language }
          messages={ mess[language] }
        >
          <WrappedComponent { ...(restProps as BaseProps) } />
        </IntlProvider>
      );
    }
  }

  return connect(mapStateToProps)(HOC);
}
