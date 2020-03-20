import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import {
  useSelector
  // useDispatch
} from "react-redux";

const ImgCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  max-width: 250px;
  background-color: white;
  margin-right: 20px;
  border-radius: 10px;
  margin: 0 auto;
`;

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
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
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
  const accounts = useSelector(state => state.accounts);

  return (
    <div>
      <h3>Accounts</h3>
      <Slider {...settings}>
        {accounts.map(account => (
          <div key={account.id}>
            <ImgCon>
              <img
                className={classes.img}
                src={account.imageUrl}
                alt="icon"
              />
            </ImgCon>
          </div>
        ))}
      
      </Slider>
    </div>
  );
};

export default Accounts;
