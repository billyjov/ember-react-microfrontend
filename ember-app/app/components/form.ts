import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

interface FormArgs {}

export default class Form extends Component<FormArgs> {
  test = 'tester voir le texte';
  eventTest: CustomEvent;

  @service('router')
  router!: any;

  constructor(owner: any, args: FormArgs) {
    super(owner, args);

    console.log('custom property init from child: ');
    this.eventTest = new CustomEvent('test', {
      composed: true,
      detail: {
        accessToken: 'sdkjakfhksdfdlksfjslkfklsdjf',
      },
    });
  }

  @action
  logout() {
    console.log('logout from child app ember:app');
    // window.history.replaceState(null, '', 'landscapes');
    window.dispatchEvent(new CustomEvent('ember-app:landscapes'));

    // document.dispatchEvent(this.eventTest);
  }

  @action
  navigate() {
    console.log('navigate to: ::: ');
    // this.router.transitionTo('landscapes');
    // window.history.pushState(null, '', 'landscapes');
  }
}
