import React from 'react'
import classes from './Person.css'

const person = (props) => {

	const rnd = Math.random();
	if (rnd > 0.7) {
		throw new Error('Something went wrong');
	}
	return (
		<div className={classes.Person} >
			<p onClick={props.delete}>
				Imie: {props.name}, wiek: {props.age} - click!
			</p>
			<p>
				{props.children}
				</p>
			<input
				type = "text"
				onChange={props.changeName}
				value = {props.name} />
		</div>
	)
};

export default person;