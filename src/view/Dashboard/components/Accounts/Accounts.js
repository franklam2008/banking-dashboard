import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  img: {
    width: 100
  }
}));
const Accounts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const classes = useStyles();

  return (
    <div>
      <h3>Accounts</h3>
      <Slider {...settings}>
        <div>
          <h3>
            <img className={classes.img} src="images/logos/rh.png" alt="icon" />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className={classes.img}
              src="images/logos/boa.png"
              alt="icon"
            />
          </h3>
        </div>
        <div>
          <h3>
            <img className={classes.img} src="images/logos/wf.png" alt="icon" />
          </h3>
        </div>
        <div>
          <h3>
            <img className={classes.img} src="images/logos/cs.png" alt="icon" />
          </h3>
        </div>
        <div>
          <h3>
            <img className={classes.img} src="images/logos/m1.png" alt="icon" />
          </h3>
        </div>
        <div>
          <h3>
            <img className={classes.img} src="images/logos/rh.png" alt="icon" />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Accounts;
