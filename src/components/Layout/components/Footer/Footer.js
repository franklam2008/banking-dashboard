import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Typography, Link } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{" "}
        <Link component="a" href="https://ifranklam.com/" target="_blank">
          Frank Lam
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        Made with{" "}
        <FavoriteIcon style={{ fontSize: 14, transform: "translateY(2px)" }} />{" "}
        in Orlando, Florida for the environment .
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
