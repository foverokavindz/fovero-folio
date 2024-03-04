import React from 'react';

const socialLinks = [
  {
    id: 1,
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/in/kavinda-maduranga-1302a71b7',
  },
  {
    id: 2,
    icon: 'fa-brands fa-x-twitter',
    link: 'https://twitter.com/kavindzMW',
  },
  {
    id: 3,
    icon: 'fa-brands fa-behance',
    link: 'https://www.behance.net/kavindamadhura',
  },
  {
    id: 4,
    icon: 'fa-brands fa-facebook',
    link: 'https://www.facebook.com/kavindzfovero/',
  },
  {
    id: 5,
    icon: 'fa-brands fa-github',
    link: 'https://github.com/foverokavindz',
  },
];

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.link}
          className="home__social-link"
          target="_blank"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
