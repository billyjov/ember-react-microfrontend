import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-app/config/environment';
import { customElement } from 'ember-custom-elements';

@customElement('ember-app-list', { useShadowRoot: true })
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  // needed for custom elements.
  autoboot = false;
}

loadInitializers(App, config.modulePrefix);
