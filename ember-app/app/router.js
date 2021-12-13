import EmberRouter from '@ember/routing/router';
import config from 'ember-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('list');
  this.route('landscapes');
  this.route('mfe2/a');
  this.route('mfe1/a');
  this.route('mfe1/b');
  this.route('mfe2/b');
});
