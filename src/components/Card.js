import React from 'react'

import { Card, Button } from 'react-bootstrap'

export default function CardComponent() {
	return (
		<Card>
			<Card.Body>
				<Card.Title>This Card Talks About Me</Card.Title>
				<Card.Text>
					<p>Name: Christine Garcia, an IT Instructor in Zuitt</p>
				</Card.Text>
				<Button variant = "success">Go Somewhere</Button>
			</Card.Body>
		</Card>

	)
}
