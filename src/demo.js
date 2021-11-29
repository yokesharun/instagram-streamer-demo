import React from 'react';
import { InstagramStreamer } from 'react-instagram-streamer';
import './index.css';

const Demo = () => {


	return (
		<>
			<h1 className="header">React Instagram Streamer Demo</h1>
			<p className="info">Wait for 10 seconds to see the magic :)</p>
			<div className="container">
				<InstagramStreamer accessToken='IGQVJXcDMybmg5eTBiS2dpdjFyYkRMRENlREg0UzVTdjNaU01OSW9BX1Rzby10a3BST3RTbExBemtGcEhjWEVnS0xDQUQwa3NhdF9hbkdncXdVMXBZAMVFSWkRXUVNkYy1HdG9zMFE3VWVVNlJNMFlhZAwZDZD' />
			</div>
		</>
	);

}

export default Demo;