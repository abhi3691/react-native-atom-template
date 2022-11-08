import axios from 'axios';
import React from 'react';
import {BaseUrl} from '../../constants/Constants';

const usegetUserDetails = () => {
  const [userData, setUserData] = React.useState(false);
  const getUserDetails = () => {
    axios.get(`${BaseUrl}users?page=2`).then(res => {
      setUserData(res.data.data);
    });
  };

  return [getUserDetails, userData];
};

export default usegetUserDetails;
