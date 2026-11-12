import React, { useEffect } from 'react';
import setupContactActions from '../components/contact-actions';
import Helmet from 'react-helmet';
import content from '../components/portfolio-content.json';

export default function Index() {
  useEffect(() => setupContactActions(), []);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Khalid Shaikh</title>
        <meta name="description" content="Khalid Shaikh — Machine Learning Engineer at Apple. Research in large language models, efficient machine learning, and robotics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Roboto:wght@300;400;500;700&display=swap" />
        <style>{content.css}</style>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </>
  );
}
