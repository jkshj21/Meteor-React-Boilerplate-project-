import React, {Component} from 'react';
import PrivateHeader from './PrivateHeader';

export default class Dashboard extends Component {

  componentWillMount(){
    if (!Meteor.userId()){
      this.props.history.replace('/');
    }
  }

  render() {
    return(
      <div>
        <PrivateHeader title="Dashboard" />
        <div className="page-content">
          Dashboard page content.
        </div>
      </div>
    )
  }
}
