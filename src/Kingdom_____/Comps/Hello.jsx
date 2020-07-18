import React, { Fragment, useState } from 'react';

//  Comps
import Head from './Head';
//  Style
import { Hellod, Headd, Bodyd } from './Styled';

const Hello = () => {
  //  STATE
  const headInit = 'oh, hi. glad you could make it.';
  const [headerNow, setHeader] = useState(headInit);

  const bodyInit = <div>SignIn</div>;
  const [bodyNow, setBody] = useState(bodyInit);

  return (
    <Hellod>
      <Fragment>
        <Headd>{headerNow}</Headd>
        <Bodyd>{bodyNow}</Bodyd>
      </Fragment>
    </Hellod>
  );
};

export default Hello;
