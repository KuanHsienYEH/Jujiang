import React, { useState, useEffect, useRef } from 'react';
import './exp.css';

const section = [{
  id: '1',
  title: 'Advantech',
  link: 'https://www.advantech.com/en',
  date: 'Nov 2019 - Aug 2023',
  post: 'Software Engineer',
  desc: [
    'Implemented frontend of Membership project using Vue3, Pinia, and Vite.',
    'Implemented frontend of marketing automation platform using React.',
    'Implemented Facebook, Google, Linkedin social login.',
    'Migrated Angular and jQuery into organized Vue components and managed state with Vuex, also implemented features on Advantech websites.',
    'Optimized Advantech Connect site page speed by 84%.',
    'Implemented event tracking to analyze customer behavior on the Advantech website.',
    'Built internal UI component library to reduce web development time.',
    'Implemented A/B testing co-work with UX/UI team, mostly increased click-through rate by 72%.',
    'Optimized SEO using pre-render.',
    'Led and implemented End-to-End testing on projects, reducing work hours from half day to 7 minutes.',
    'Integrated test automation into Azure CICD pipeline.',
    'Documented test guidelines to let newbies easily follow.',
    'Mentored junior front-end developer on team in expanding front-end skillset.',
    'Gave internal tech talk.'
  ]
}, {
  id: '2',
  title: 'Starbit',
  link: 'https://star-bit.io/',
  date: 'Apr 2018 - Feb 2019 ',
  post: 'Frontend Developer',
  desc: [
    'Front-end web development on the digital cryptocurrency exchange platform.',
    'Implemented SPA landing page for business marketing purposes.'
  ]
}, {
  id: '3',
  title: '104 corp',
  link: 'https://www.104.com.tw/jobs/main/',
  date: 'Feb 2019 - Aug 2019',
  post: 'ITPM',
  desc: [
    'Implemented Root Cause Analysis flow to clarify the root causes which lead to web service downtime.',
    'Implemented Change Management which efficiently reduced service downtime caused by human error by 90%.',
    'Generated reports by parsing XML using PHP to organize APs that run on company web service, which was maintained manually, reducing working hours from 3 days to 2 hours.',
    'Designed the UI/UX of the internal infrastructure management online service page for the SLA reports.',
    'Organized the step approach to the infrastructure updated plan.',
    'Responsible for handling interdepartmental issues.'
  ]
}]

function Exp() {
  const [sections, setSections] = useState(section);
  const [currentSection, setCurrentSection] = useState('1');
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);



  const handleScroll = () => {
    const scrollPosition = contentRef.current.scrollTop + contentRef.current.offsetHeight / 2;
    const visibleSection = sections.find(
      (section) => scrollPosition >= section.top && scrollPosition < section.bottom
    );
    if (visibleSection) {
      setCurrentSection(visibleSection.id);
    }
  };

  const handleClick = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <section id="Expenience">
      <h2 className='title'>Expenience</h2>
      <div className="exp">
        <div className="exp__sidebar" ref={sidebarRef}>
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={currentSection === section.id ? 'active' : ''}
                onClick={() => handleClick(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="exp__content"
          ref={contentRef}
          onScroll={handleScroll}
        >
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className={`section ${currentSection === section.id ? 'visible' : ''}`}
              data-title={section.title}
              data-desc={section.desc}
            >
              <h2>{section.post}<a href={section.link}> @ {section.title}</a></h2>
              <p>{section.date}</p>
              <ul>
                {section.desc.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Exp;
