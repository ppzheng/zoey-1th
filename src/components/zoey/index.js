import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../../core/actions';

// const About = () => (
//   <div>
//     <h2>xxxxx</h2>
//   </div>
// );
//
// export default About

class Hello extends React.Component {
  render() {
    let {name, addName} = this.props;
    console.log('render', name, addName);
    return (
      <div>
        <div>
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        </div>
        <h1>You found me ~ { name }</h1>
        <input type="text" onKeyPress={ addName }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.default;
};

const mapDispatchToProps = dispatch => {
  return {
    // addName: bindActionCreators(actions.addName, dispatch)
    addName: event => {
      if (event.key === 'Enter') {
       dispatch(actions.addName(event));
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
