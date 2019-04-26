import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './slider-styles.css';

const content = [
	{
		title: 'Picasso Painted It',
		description:
		'Transform any image into a Picasso-esque Masterpiece.',
		button: 'View Project',
        project_image: 'https://res.cloudinary.com/tico-cloudinary/image/upload/v1556306221/picasso_project_ynohmb.png',
        project_url: 'https://picasso-frontend.netlify.com/',
		user_name: 'A. Lowell Richardson',
		user_image: 'https://media.licdn.com/dms/image/C5603AQFwVh3DyrUiaA/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=sMfz7iv71WGjlDfUo086EFs0fO6nQsxYP1LKNdg4vdE'
	},
	{
		title: 'Mentors International Training Reminders',
		description:
		'Eliminating poverty around the world, one entrepreneur at a time.',
		button: 'View Project',
        project_image: 'https://res.cloudinary.com/tico-cloudinary/image/upload/v1556306772/mentors_students_tkovzi.png',
        project_url: 'https://pacific-dusk-14025.herokuapp.com',
		user_name: 'Tico Thepsourinthone',
		user_image: 'https://media.licdn.com/dms/image/C4D03AQF7SiNESVIHKg/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=jq3a93PDuqk0PAKTv6s0-vm8PGnneVLaAD3ghbFwXww'
	},
];


class Carousel extends React.Component {
    render() {
        return (
            <div className="Carousel">
                <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.project_image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h1>{item.title}</h1>
                                <p className="project_description">{item.description}</p>
                                <a href={item.project_url} target="_blank" rel="noopener noreferrer"><button>{item.button}</button></a>
                            </div>
                            <section>
                                <span>
                                    Built by: <img src={item.user_image} alt={item.user_name} />
                                </span>
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    };
};

  
export default Carousel;