import React, { useState } from 'react';

const Tours = ({ tours, deleteCard }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section>
      <div className='title'>
        <h2>Ours Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tourCards) => {
          const { id, image, name, info, price } = tourCards;
          return (
            <div key={id}>
              <article className='single-tour'>
                <img src={image} alt={name} />
                <footer>
                  <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>{price}</h4>
                  </div>
                  <p>
                    {readMore ? info : `${info.substring(0, 150)}...`}
                    <button
                      className='readmore'
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? 'Show less' : 'Read More'}
                    </button>
                  </p>
                  <button
                    className='btn btn-delete'
                    onClick={() => deleteCard(id)}
                  >
                    Not Interested
                  </button>
                </footer>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
