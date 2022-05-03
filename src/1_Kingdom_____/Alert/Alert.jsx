import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// =================
// ===   alert   ===
// const aoeAct2 = '#18a29f'; // ...morek
// const txtWhite3 = '#e0e0e0'; // ....more
const AlertCont = styled.div`
  width: 100%;
`;

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertCont key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </AlertCont>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
