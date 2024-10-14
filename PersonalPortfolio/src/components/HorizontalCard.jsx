import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import port from '../assets/portfolio.jpg';
import movie from '../assets/movie.jpg';

import PropTypes from 'prop-types'; // Import PropTypes

const cardData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "This Project is my recent project of personal portfolio Website i Created using Techstack(React, VITE+Tailwindcss)",
    imageUrl:
      port,
    path: "https://github.com/BhaveshGupta07/personalportfolio",
  },
  {
    id: 2,
    title: "CROPEYE",
    description:
      "A ML model that Finds diseased crop using drone technology for image capturing so that we can use pesticides in affected area only,Techstack(ML,CNN,Python) ",
   
    imageUrl:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "https://github.com/BhaveshGupta07/CropEye",
  },
  {
    id: 3,
    title: "MoviePorium",
    description:
      "Movies search based website so that user can look for ratings and browse trailers for the movies,Techstack(REACT,node,tmdb api,js,css)",
    
    imageUrl:
      movie,
    path: "https://github.com/BhaveshGupta07/MoviePorWebsite",
  },
  {
    id: 4,
    title: "FaceRecognition",
    description:
    "An ML web app that recognizes your face and searches it from database of images to find matches.Techstack(VGGFace2,Python,Flask)",
    
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "https://github.com/BhaveshGupta07/facerecognitionwebapp",
  },
  {
    id: 5,
    title: "Spam Detection Model",
    description:
      "An Email Spam detection model that can identify spams from the collection of emails.Techstack(Python,Randomforest,nltk)",
   
    imageUrl:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "https://github.com/BhaveshGupta07/SpamDetectionEmail",
  },
  {
    id: 6,
    title: "Ats System Using gemini",
    description:
      "ATS System to check the score of your resume using the power gemini ai.Techstack(python,gemini,streamlit)",
    
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "https://github.com/BhaveshGupta07/AtsSystemUsingGemini",
  },
];

export function HorizontalCard({ title = "Default Title", description = "Default description.", imageUrl, path }) {
  return (
    
    <Card className="w-full max-w-[400px] flex-row mb-6 bg-inherit rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-1/3 shrink-0 rounded-l-lg overflow-hidden"
      >
        <img
          src={imageUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-6 flex flex-col">
       
        <Typography variant="h6" color="Black" className="mb-2 font-bold">
          {title}
        </Typography>
        <Typography color="Black" className="mb-4 font-normal"> 
          {description}
        </Typography>
        <a href={path} className="inline-block">
          <Button 
            variant="filled" 
            className="flex items-center gap-2 bg-blue-600 text-white font-normal hover:bg-blue-700 transition-colors duration-300 border border-transparent rounded-md shadow-md">
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

HorizontalCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
 
  imageUrl: PropTypes.string.isRequired, 
  path: PropTypes.string.isRequired, 
};

export function HorizontalCardStack() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">PROJECTS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => {
        return (
          <HorizontalCard
            key={card.id}
            title={card.title}
            description={card.description}
            
            imageUrl={card.imageUrl}
            path={card.path} 
          />
        );
      })}
    </div>
    </div>
  );
}
