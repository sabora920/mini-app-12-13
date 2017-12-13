import React from 'react';

export default function Images(props){
	const pictures=props.pictures.map((pictures, index)=>
		<div key={index}>
			<img src={pictures.url} alt={pictures.description}/>
			<label>{pictures.description}</label>
		</div>
	);
	return(
		<div>
			{pictures[props.selected]}
		</div>
	);
}