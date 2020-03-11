import React from "react";
import uuid from 'uuid/v1';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
export default [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending',
    desc: 'CITI AUTOPATO DES',
    balance:'9,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered',
    desc: 'BKOFAMERICA MOBILE 03/01 231253512',
    balance:'9,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded',
    desc: 'BKOFAMERICA MOBILE 03/01 231253512',
    balance:'9,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending',
    desc: 'BKOFAMERICA MOBILE 03/01 231253512',
    balance:'9,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered',
    desc: 'BKOFAMERICA MOBILE 03/01 231253512',
    balance:'9,323.11',
    type: <AccountBalanceOutlinedIcon />,
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered',
    desc: 'BKOFAMERICA MOBILE 03/01 231253512',
    balance:'9,323.11',
    type: <AccountBalanceOutlinedIcon />,
  }
];
