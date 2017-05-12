import React, {Component} from 'react';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';
useStrict(true);

// view and model for Counter scene
import Counter from './components/Counter';
import store from './model/counter';

const OCounter= observer(Counter);

@observer
export default class TestApp extends Component {
  render(){
    return <OCounter store={store}/>
  }
}