import React from 'react';

const socialLinks = [
  {
    id: 1,
    icon: 'fa-brands fa-linkedin',
    link: 'https://www.instagram.com/',
  },
  {
    id: 2,
    icon: 'fa-brands fa-x-twitter',
    link: 'https://twitter.com/',
  },
  { id: 3, icon: 'fa-brands fa-behance', link: 'https://www.behance.net/' },
  { id: 4, icon: 'fa-brands fa-facebook', link: 'https://dribbble.com/' },
  { id: 5, icon: 'fa-brands fa-github', link: 'https://www.pinterest.com/' },
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
