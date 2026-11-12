// Build the same homepage content without requiring the legacy Gatsby toolchain.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const content = require('../src/components/portfolio-content.json');
const setupContactActions = require('../src/components/contact-actions');
const out = path.join(root, 'dist');
fs.mkdirSync(out, { recursive: true });
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Khalid Shaikh</title><meta name="description" content="Khalid Shaikh — Machine Learning Engineer at Apple. Research in large language models, efficient machine learning, and robotics."><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Roboto:wght@300;400;500;700&display=swap"><style>${content.css}</style></head><body>${content.html}<script>(${setupContactActions.toString()})();</script></body></html>`;
fs.writeFileSync(path.join(out, 'index.html'), html);
fs.copyFileSync(path.join(root, 'static/profile.jpg'), path.join(out, 'profile.jpg'));
fs.cpSync(path.join(root, 'static/logos'), path.join(out, 'logos'), { recursive: true });
if (fs.existsSync(path.join(root, 'static/resume.pdf'))) fs.copyFileSync(path.join(root, 'static/resume.pdf'), path.join(out, 'resume.pdf'));
console.log(`Homepage preview built at ${out}`);
