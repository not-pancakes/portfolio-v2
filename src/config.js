module.exports = {
  siteTitle: 'Mikolaj Wojtowicz | It Student',
  siteDescription:
    'Mikolaj Wojtowicz is a It Student at Wisniowa, who loves learning new things and expanding his skill set.',
  siteKeywords:
    'Mikolaj Wojtowicz, Mikolaj, Wojtowicz, not-pancakes, software developer, software engineer, content freelancer, face mask, face mask detection, web developer, java developer, pepper content, jamshedpur, amdocs, bit, mesra',
  siteUrl: 'https://mwojtowicz.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-9G47HBSVPE',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Mikolaj Wojtowicz',
  location: 'Warsaw, Poland',
  email: 'xxmikixx.dm@gmail.com',
  github: 'https://github.com/not-pancakes',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/not-pancakes',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/not-pancakes',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
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
