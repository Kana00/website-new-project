// this file is to remove "is not a constructor function for JSX elements" warnings
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
/**
 * A component that hoists its 'props' into context that can be injected into child components
 * via the MobX 'inject' decorator or function.
 *
 * This component is an adapter for the MobX 'Provider' component and is a workaround because of the typing
 * issue reported in https://github.com/mobxjs/mobx-react/issues/342.
 */
export class InjectionProvider extends React.Component<any> {
  /**
   * Renders the [[InjectionProvider]] into the component tree.
   *
   * [[InjectionProvider#render]] simply creates a MobX 'Provider' component and supplies it with the
   * current props.
   */
  public render(): JSX.Element {
      const stores = { ...this.props };
      // Remove the 'children' because we don't want that passed around via React's Context mechanism
      delete stores.children;
      return React.createElement(Provider as any, stores, this.props.children);
  }
}

export class InjectionRouter extends React.Component<any> {
  public render(): JSX.Element {
      const stores = { ...this.props };
      delete stores.children;
      return React.createElement(Router as any, this.props, this.props.children);
  }
}

export class InjectionSwitch extends React.Component<any> {
  public render(): JSX.Element {
      const stores = { ...this.props };
      delete stores.children;
      return React.createElement(Switch as any, this.props, this.props.children);
  }
}

export class InjectionRoute extends React.Component<any> {
  public render(): JSX.Element {
      const stores = { ...this.props };
      delete stores.children;
      return React.createElement(Route as any, this.props, this.props.children);
  }
}

export class InjectionLink extends React.Component<any> {
  public render(): JSX.Element {
      const stores = { ...this.props };
      delete stores.children;
      return React.createElement(Link as any, this.props, this.props.children);
  }
}
