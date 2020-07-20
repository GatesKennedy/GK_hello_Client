import React, { Fragment, useState } from 'react';

//  Comps

//  Style
import { Head, Body } from '../Styled';

const Auth = () => {
  //  STATE
  const headInit = 'oh, hi. glad you could make it.';
  const [headerNow, setHeader] = useState(headInit);

  const bodyInit = <div>SignIn</div>;
  const [bodyNow, setBody] = useState(bodyInit);

  return (
    <Fragment>
      <p>Good Good</p>
      {bodyInit}
    </Fragment>
  );
};

export default Auth;
