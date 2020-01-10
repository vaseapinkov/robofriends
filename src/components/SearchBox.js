import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2'>
			<input
			className='pa3 ba b--green bg-washed-yellow'
				type='search' 
				placeholder='Search for Robots'
				onChange={searchChange}
			/>	
		</div>
	);
}

export default SearchBox;