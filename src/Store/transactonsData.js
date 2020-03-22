import React from "react";
import uuid from 'uuid/v1';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
export default [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    createdAt: 1555016400000,
    status: 'pending',
    desc: 'CITI AUTOPATO DES',
    balance:'8,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    createdAt: 1555016400000,
    status: 'delivered',
    desc: 'WELLS FARGO SAVINGS',
    balance:'9,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    createdAt: 1554930000000,
    status: 'refunded',
    desc: 'BKOFAMERICA MOBILE 03/01 231253512',
    balance:'4,343.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    createdAt: 1554757200000,
    status: 'pending',
    desc: 'ROBINHOOD INVESTMENT 03/11 232333452',
    balance:'4,353.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    createdAt: 1554670800000,
    status: 'delivered',
    desc: 'BKOFAMERICA MOBILE 03/01 231253512',
    balance:'6,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    createdAt: 1554670800000,
    status: 'delivered',
    desc: 'RENT PAYMENT',
    balance:'7,323.11',
    type: <AccountBalanceOutlinedIcon />,
  }
];