import React from 'react';

function Profile({
	profile: {
		title,
		name,
		img,
		grade,
		university,
		specialization,
		studies,
		city
	}
}) {
	return (
		<div className='profile-card'>
			<div className={`profile-picture ${img}`}></div>
			<div className='profile-info'>
				<h3>
					{title}. {name}
				</h3>
				<small>
					{grade} - {university}
				</small>
				<small>{specialization}</small>
				<small>
					{studies} - {city}
				</small>
			</div>
		</div>
	);
}

export default Profile;