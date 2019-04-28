import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const projects = [
	{
		title: 'Picasso Painted It',
		description:
		'Transform any image into a Picasso-esque Masterpiece.',
		button: 'View Project',
        project_image: 'https://res.cloudinary.com/tico-cloudinary/image/upload/v1556306221/HireLambdaStudents.com/picasso_project_ynohmb.png',
        project_url: 'https://picasso-frontend.netlify.com/',
        student_name: 'A. Lowell Richardson',
        student_github_url: 'https://github.com/andrewlowell',
		student_image: 'https://media.licdn.com/dms/image/C5603AQFwVh3DyrUiaA/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=sMfz7iv71WGjlDfUo086EFs0fO6nQsxYP1LKNdg4vdE'
	},
	{
		title: 'Black Hole',
		description:
		'Have you ever had a bad experience and wanted to say something without them hearing what you said?',
		button: 'View Project',
        project_image: 'https://res.cloudinary.com/tico-cloudinary/image/upload/v1556312941/HireLambdaStudents.com/black_hole_o9nmdl.png',
        project_url: 'https://black-hole-build-week.netlify.com/',
        student_name: '	Javontay McElroy',
        student_github_url: 'https://github.com/javontaymcelroy',
		student_image: 'https://avatars1.githubusercontent.com/u/46494741?s=460&v=4'
    },
    {
		title: 'Mentors International Training Reminders',
		description:
		'Eliminating poverty around the world, one entrepreneur at a time.',
		button: 'View Project',
        project_image: 'https://res.cloudinary.com/tico-cloudinary/image/upload/v1556306772/HireLambdaStudents.com/mentors_students_tkovzi.png',
        project_url: 'https://pacific-dusk-14025.herokuapp.com',
        student_name: 'Tico Thepsourinthone',
        student_github_url: 'https://github.com/ticotheps',
		student_image: 'https://media.licdn.com/dms/image/C4D03AQF7SiNESVIHKg/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=jq3a93PDuqk0PAKTv6s0-vm8PGnneVLaAD3ghbFwXww'
    },
];


class Carousel extends React.Component {
    render() {
        return (
            <div className="Carousel">
                <Slider autoplay={5000} className="slider-wrapper">
                    {projects.map((item, index) => (
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
                                <span className="built-by-container">
                                    <strong>Built by:</strong> 
                                    
                                        <div className="student-container">
                                            <a href={item.student_github_url} target="_blank" rel="noopener noreferrer">
                                                <img src={item.student_image} alt={item.student_name} />
                                            </a>
                                            <p>{item.student_name}</p>
                                        </div>
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