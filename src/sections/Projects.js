import React from 'react';
import Flashcard from '../components/Flashcard';
import '../styles/Projects.css';

const projectData = [
  {
    title: 'Pneumonia detection through Image Classification Using CNN',
    description: [
      'Used 2000+ x-ray images of Infected and Not Infected with Pneumonia.',
      'Trained on many CNN Architectures like VGG19, Resnet50-V2, EfficientNetB0-B7, and also customized CNN architecture.',
    ],
    links: [
      { text: 'View Research Paper', url: 'https://ijngc.perpetualinnovation.net/index.php/ijngc/article/view/931' },
    ],
  },
  {
    title: 'Plant Village Disease Classification',
    description: [
      'Trained a model for classifying diseases of Tomato, Potato, and Pepper Bell using CNN Sequential model with pretrained base like VGG.',
      'Multi class classification problem with 2 classes of Pepper Bell, 3 classes of Potato, and 10 classes of Tomato diseases with a total of 17000+ leaf images.',
    ],
    links: [
      { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013/Plant-Disease-Detection' },
    ],
  },
  {
    title: 'Cotton Segmentation and Distance Estimation',
    description: [
      'Cotton contour extraction using Image Segmentation and then Distance Estimation of the cotton object from the camera.',
      'Used Computer Vision and Deep Learning techniques for Image Segmentation and made a real dataset for Distance Estimation by manually collecting actual distances from the cotton.',
    ],
    links: [
      { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013?tab=repositories' },
    ],
  },
  {
    title: 'End-to-End Insurance-Premium-Prediction',
    description: [
      'The main goal of this project is to give an estimate of the person\'s expenses which in turn will help in whether the insurance should be given to the person or not. This regression problem gave an R2 Score of 88% using CataBoost Regressor after fine tuning.',
      'With the help of MLOps life cycle and CI/CD, deployed this Flask API on Hugging Face for testing purposes.',
    ],
    links: [
      { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013/Insurance-Premium-Prediction' },
      { text: 'Demo', url: 'https://huggingface.co/spaces/mohitnilkute013/Insurance-Premium-Prediction-App' },
    ],
  },
  {
    title: 'End-to-End Credit Card Fraud Detection',
    description: [
      'The problem statement was to detect an account holder\'s fraud using his last 6-month financial statement. This classification problem gave an AccuracyScore of 82% using Gradient Boost Classifier.',
      'Used MLFlow, And DVC for experiment tracking and data version control.',
    ],
    links: [
      { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013/Credit-Card-Fraud-Classification' },
    ],
  },
  {
    title: 'End-to-End Food Delivery Time Prediction',
    description: [
      'The main goal of this project is to give an estimate of the time required for the delivery person to deliver food to respected location. This regression problem gave an R2 Score of 82% using XGBoost Regressor.',
      'With the help of MLOps life cycle and CI/CD, deployed this Flask API on AWS Beanstalk for testing purpose.',
    ],
    links: [
      { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013/DeliveryTimePrediction' },
      { text: 'Demo', url: 'https://huggingface.co/spaces/mohitnilkute013/Delivery-Time-Prediction' },
    ],
  },
  {
    title: 'Text Data Summarizer using HuggingFace Api',
    description: [
      'This NLP project gives summarized form of text data provided.',
      'Used HuggingFace pretrained model to train the model on text data.',
      'Integrated on a website with Flask as a backend.',
    ],
    links: [
      { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013/Text-Summarization-NLP-Project' },
    ],
  },
  {
    title: 'Robotic Arm using ROS',
    description: [
      'Made a 3 DOF Robotic Arm with URDF, and simulated it using Rviz and Gazebo.',
      'Used MoveIt for Arm Manipulation.',
      'Integrated plugins for camera and motion control.',
    ],
    links: [
      { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013/Robotic-Arm-with-ROS' },
    ],
  },
//   {
//     title: 'This Portfolio Website',
//     description: [
//       'Created this portfolio website from scratch just by using HTML, CSS, React JS.',
//       'This is a completely Responsive website.',
//       'Deployed this website using Github Actions, CI/CD.',
//     ],
//     links: [
//       { text: 'View on GitHub', url: 'https://github.com/mohitnilkute013/Mohits-Portfolio' },
//     ],
//   },
  // Add more project data as needed
];

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="grid-project">
        {projectData.map((project, index) => (
          <Flashcard
            key={index}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
