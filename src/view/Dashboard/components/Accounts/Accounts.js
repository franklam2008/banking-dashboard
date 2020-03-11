import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  img: {
    width: 100
  },
  imgCon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:150,
    background:'white',
    marginRight:20,
    borderRadius:10,
    outline:'none'
  }
}));
const Accounts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
      
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  const classes = useStyles();

  return (
    <div>
      <h3>Accounts</h3>
      <Slider {...settings}>
        <div>
          <h3 className={classes.imgCon}>
            <img className={classes.img} src="images/logos/rh.png" alt="icon" />
          </h3>
        </div>
        <div>
          <h3 className={classes.imgCon}>
            <img
              className={classes.img}
              src="images/logos/boa.png"
              alt="icon"
            />
          </h3>
        </div>
        <div>
          <h3 className={classes.imgCon}>
            <img className={classes.img} src="images/logos/wf.png" alt="icon" />
          </h3>
        </div>
        <div>
          <h3 className={classes.imgCon}>
            <img className={classes.img} src="images/logos/cs.png" alt="icon" />
          </h3>
        </div>
        <div>
          <h3 className={classes.imgCon}>
            <img className={classes.img} src="images/logos/m1.png" alt="icon" />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Accounts;
