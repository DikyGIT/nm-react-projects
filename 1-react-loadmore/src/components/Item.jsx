import { listItem } from "../data";

import { useState } from "react";

const Item = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const initialCount = 3;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleLessMore = () => {
    setVisibleCount(initialCount);
  };

  return (
    <>
      <div className="load-more-box">
        {listItem.slice(0, visibleCount).map((item) => (
          <div key={item.id}>
            <img src={item.gambar} alt="Image" />
          </div>
        ))}
      </div>
      <div className="btn-load-more">
        {visibleCount < listItem.length && <button onClick={handleShowMore}>Load More</button>}
        {visibleCount > listItem.length && <button onClick={handleLessMore}>Less More</button>}
      </div>
    </>
  );
};

export default Item;
