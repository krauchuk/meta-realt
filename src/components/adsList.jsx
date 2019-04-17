import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import Ad from './ad';
import '../css/adsList.css';

const adsList = ({ ads, clickHandle }) => (
  <div className="adsList">
    {ads.map(ad => (
      <Ad
        key={ad.id}
        ad={ad}
        clickHandle={clickHandle}
      />
    ))}
  </div>
);

adsList.propTypes = {
  ads: entityProps.ads.isRequired,
  clickHandle: propTypes.func.isRequired,
};

export default adsList;
