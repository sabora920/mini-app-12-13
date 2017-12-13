import React from 'react';

export default function SurpriseImage(props) {
	if(props.selected==="option1"){
		return <img src="https://media.giphy.com/media/l0IybQ6l8nfKjxQv6/giphy.gif" alt="Squirrel!" />;
	} else if (props.selected==="option2"){
		return <img src="https://media.giphy.com/media/P3aaEHlnOuj6M/giphy.gif" alt="easy tree" />;
	}else {
		return <img src="https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif" alt="CSS explained" />;
	}
}