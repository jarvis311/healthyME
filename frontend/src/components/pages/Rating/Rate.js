import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
var FontAwesome  = require('react-fontawesome')

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesome
        key={idx}
        className="cursor-pointer"
        name="star"
        onClick={() => onRating(idx)}
        style={{ color: getColor(idx) }}
        onMouseEnter={() => setHoverRating(idx)}
        onMouseLeave={() => setHoverRating(0)}
      />
      ));
  }, [count, rating, hoverRating]);

  return <h3>{starRating}</h3>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color:{
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#E7411E",
    unfilled: "#D1AFA8",
  },
};

export default Rate;