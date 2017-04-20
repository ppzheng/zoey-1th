/**
 * Created by zoey on 2017/4/19.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// const About = () => (
//   <div>
//     <h2>xxxxx</h2>
//   </div>
// );
//
// export default About

class Hello extends React.Component {
  render() {
    let { name, addName } = this.props;
    console.log( 'render' , name , addName );
    return(
      <div>
        <div>
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        </div>
        <h1>Hello,{ name }</h1>
        <input type="text" onkeypress = {addName}/>
      </div>
    )
  }
}
