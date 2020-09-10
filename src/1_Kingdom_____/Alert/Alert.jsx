import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// =================
// ===   alert   ===

//  Robin's Egg Blue
const aoeAct03 = '#54e5e3';   // ....less
const aoeAct02 = '#3ee2df';   // ...less
const aoeAct01 = '#28dfdb';   // ..less
const aoeAct0 =  '#1fcecb';   // Standard
const aoeAct1 =  '#1cb8b5';   // ..more 
const aoeAct2 =  '#18a29f';   // ...more
const aoeAct3 =  '#158c89';   // ....more

const txtBlk2 =  '#1d1d1d';   // ...more
const txtWhite3 =  '#e0e0e0';   // ....more

const alert = {
  width: '100vw',
  padding: '4px 8px',
}

.alert-warn {
  backgroundColor: aoeAct2,
  color: txtWhite3,
}

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
