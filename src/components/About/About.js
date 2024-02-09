import React from 'react';
import { URL_REDIRECTION } from '../Portfolio/portfolio.constants';

import { COMPANIES, REDIRECT_LINK } from '../Experience/experience.constants';

import './about.css';

const About = () => {
  return (
    <section id={URL_REDIRECTION.ABOUT}>
      <div>
        <p>
          I am a passionate software engineer with a diverse skill set and a strong background in <span>front-end and back-end development</span>. Graduating from LNMIIT in 2022, I honed my programming skills in languages like <span>C, C++, Python, and Java</span>, while also gaining experience in <span>mobile app development</span> using Android Studio. During my time at college, I undertook several projects, including the development of a food delivery app called Bazinga Clone and a TODO app, which helped solidify my understanding of software development principles.
        </p>
        <p>
          In January 2022, I embarked on my professional journey as a <span>software engineer at <a className='companyName' href={REDIRECT_LINK[COMPANIES.TEKION]} target="_blank" rel="noopener noreferrer">Tekion</a></span>, where I contributed to various critical projects such as <span>global search, dealer configuration, and customer management and many others</span>. I take immense pride in my work, especially my contribution to the global search project, which received accolades from senior management for its impact and efficiency. By the time I left Tekion, the global search feature was live for over <span>50 dealers</span> and was slated for expansion across Europe.
        </p>
        <p>
          Transitioning to <a className='companyName' href={REDIRECT_LINK[COMPANIES.WINGIFY]} target="_blank" rel="noopener noreferrer">Wingify</a> in October 2023, I assumed the role of the <span>sole front-end developer</span> in the pricing team. Despite the challenge of being the only front-end resource among predominantly backend developers, I successfully managed all front-end tasks and even ventured into backend development to broaden my skill set. Some of my notable projects at Wingify include the implementation of <span>combined plans, server-side testing,</span> and currently doing the integration of new backend pricing service with the front end.
        </p>
        <p>
          Throughout my career, I have had the privilege of mentoring interns, imparting industry best practices and guiding them through real-world problem-solving scenarios. I am deeply committed to continuous learning and growth, always seeking new challenges and opportunities to expand my knowledge and expertise in software engineering.
        </p>
      </div>
    </section>
  );
};

export default About;
