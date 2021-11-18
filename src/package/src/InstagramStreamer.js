import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import { CSSGrid, layout  } from 'react-stonecutter';
import _ from "lodash";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import fullscreen from './img/full-screen.png';
import info from './img/info.png';

const InstagramStreamer = (props) => {
  const {
    accessToken = ''
  } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);

  const randomize = () => setItems(_.shuffle(items));
  const handle = useFullScreenHandle();

  useEffect(() => {
    if(accessToken !== ''){
      fetch("https://graph.instagram.com/me/media?fields=media_url&access_token="+ accessToken)
        .then(res => res.json())
        .then(
          (result) => {
            const image_urls = result.data.map((i) => {
              return {
                id: i.id,
                media_url: i.media_url 
              }
            });
            setItems(image_urls);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if(isLoaded && !error){
        randomize();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isLoaded, error, randomize])

  if (accessToken === '') {
    return <div>Error: Invalid access_token</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
      <a href="#" className="float-fullscreen" onClick={handle.enter}>
      <img src={fullscreen} alt="fullscreen" />
      </a>
      <a href="#" className="float-info" target="_blank">
      <img src={info} alt="info" />
      </a>
      <FullScreen handle={handle}>
        <CSSGrid
          component="ul"
          columns={5}
          columnWidth={150}
          gutterWidth={130}
          gutterHeight={40}
          layout={layout.pinterest}
          duration={3000}
          easing="ease-out"
  >
          {items.map(item => (
            <li key={item.id} itemHeight={250}>
              <img src={item.media_url} alt="" height='320'/>
            </li>
          ))}
        </CSSGrid>
      </FullScreen>
      </div>
    );
  }
}

InstagramStreamer.propTypes = {
  accessToken: string
}

export default InstagramStreamer;