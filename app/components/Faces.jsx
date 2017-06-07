import React from 'react'
import {Link} from 'react-router'

// free bootstrap react templates +1 -- KHAM

export default function Faces(props) { // destructure props here { faces } -- KHAM
  const faces = props.faces
  console.log('state', state)
  console.log('props', props)
  console.log('faces,' , faces)

  return (
		<div className='main-container'>
			<div className='title'>
				<h2>
					Face Wall
				</h2>
			</div>
			<div className='box'>
				{
					faces && faces.map(face => (
						<div className='item' key={face.id}>
							<Link to={`/faces/${face.id}`}>
								<img className='img-item' src={face.image} />
								<h3>{face.title}</h3>
								<h3>{face.price}</h3>
								<h4>{face.description}</h4>
							</Link>
						</div>
						))
				}
			</div>
		</div>
		)
}
