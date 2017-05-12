import {action, observable, autorun} from 'mobx';
import autobind from 'autobind-decorator'

@autobind
class CounterStore {
  @observable counter = 0;
  @observable total = 0;

  constructor(){
    autorun(()=>this.counter);
  }

  @action increaseTotal(){
    this.total++;
  }

  @action increase(){
    this.counter++;
    this.increaseTotal();
  }

  @action decrease(){
    this.counter--;
    this.increaseTotal();
  }

  @action reset(){
    this.counter = 0;
    this.total = 0;
  }
}

export default new CounterStore();