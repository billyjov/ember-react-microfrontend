import Component from '@glimmer/component';

interface ApplicationArgs {}

export default class Application extends Component<ApplicationArgs> {
  constructor(owner: any, args: ApplicationArgs) {
    super(owner, args);
  }
}
