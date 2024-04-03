import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/wp.png";

const data = [
  {
    id: 1,
    image: Image3,
    title: "Wordpress",
    description:
      "Elevate your online presence with customizable WordPress solutions tailored to your needs. From sleek blogs to dynamic e-commerce platforms, I specialize in harnessing the power of WordPress to bring your digital vision to life.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Craft seamless digital experiences that captivate your audience and drive results. I ensure pixel-perfect designs, responsive layouts, and intuitive navigation, empowering your brand to thrive in the ever-evolving online landscape.",
  },
  {
    id: 3,
    image: Image1,
    title: "UI/UX design",
    description:
      "Delight your users with intuitive interfaces and compelling user experiences. I blend creativity with functionality to design interfaces that not only look stunning but also enhance usability, ensuring every interaction leaves a lasting impression. ",
  },
  // {
  //   id: 4,
  //   image: Image1,
  //   title: 'UI/UX design',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  // },
  // {
  //   id: 5,
  //   image: Image2,
  //   title: 'Web Development',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  // },
  // {
  //   id: 6,
  //   image: Image3,
  //   title: 'Photography',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  // },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map((service) => (
          <div className="services__card" key={service.id}>
            <img src={service.image} alt="" className="services__img" />
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
