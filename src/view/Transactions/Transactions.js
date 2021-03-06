import React from "react";
import clsx from "clsx";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import VSensorjs from "../../components/VisibilitySensor";

import {
  useSelector
  // useDispatch
} from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: "flex",
    alignItems: "center"
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const Transactions = props => {
  const orders = useSelector(state => state.transactions);
  const { className } = props;
  const classes = useStyles();
  return (
    <VSensorjs>
      <Card className={clsx(classes.root, className)}>
        <CardHeader
          action={
            <Button color="primary" size="small" variant="outlined">
              New entry
            </Button>
          }
          title="Latest Transaction"
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sortDirection="desc">
                      <Tooltip enterDelay={300} title="Sorting">
                        <TableSortLabel active direction="desc">
                          Posting Date
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Type</TableCell>

                    <TableCell>Status</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Available Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map(order => (
                    <TableRow hover key={order.id}>
                      <TableCell>
                        {moment(order.createdAt).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>{order.desc}</TableCell>
                      <TableCell>{order.type}</TableCell>
                      <TableCell>{order.status}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{order.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button color="primary" size="small" variant="text">
            View all <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    </VSensorjs>
  );
};

Transactions.propTypes = {
  className: PropTypes.string
};

export default Transactions;
