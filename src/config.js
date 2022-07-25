module.exports = {
  siteTitle: 'Karl Qu | Risk Manager | Software Developer | Financial Engineer',
  siteDescription:
    'Karl Qu is a Risk Manager at Scotiabank, who loves learning new things.',
  siteKeywords:
    'Karl Qu, Qu, Karl, karlyangqu, risk manager, software engineer, financial engineer',
  siteUrl: 'https://karlyangqu.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Karl Qu',
  location: 'Toronto, Canada',
  email: 'karlyangqu1993@gmail.com',
  github: 'https://github.com/karlyangqu',
  twitterHandle: '@YangQu32478143',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/karlyangqu',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/karlqu/',
    },
    // {
    //   name: 'Codepen',
    //   url: '',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/karlya_qq/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/YangQu32478143',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
