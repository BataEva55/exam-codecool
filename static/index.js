import data from "./data.js";

const root = document.querySelector("#root");

function main() {
  const section = document.createElement("section");
  section.classList.add("container");
  const cardsData = [
    {
      header: "Card 1 Header",
      imageSrc: "/static/assets/react.png",
      imageAlt: "React",
      text: "React is a popular JavaScript library for building user interfaces, especially single-page applications. It allows developers to create reusable UI components and manage application state efficiently.",
    },
    {
      header: "Card 2 Header",
      imageSrc: "/static/assets/angular.png",
      imageAlt: "Angular",
      text: "Angular is a comprehensive framework for building dynamic web applications, developed by Google. It follows a component-based architecture and offers a robust set of features for creating large-scale, enterprise-level applications.",
    },
    {
      header: "Card 3 Header",
      imageSrc: "/static/assets/firebase.png",
      imageAlt: "Firebase",
      text: "Firebase is a platform by Google that provides a suite of cloud-based tools and services for building web and mobile applications. It includes a real-time database, authentication, hosting, and various other utilities that ease backend development.",
    },

    {
      header: "Card 4 Header",
      imageSrc: "/static/assets/nodejs.png",
      imageAlt: "NodeJs",
      text: "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side development with JavaScript. It is designed for building scalable network applications and is commonly used in modern web development for creating RESTful APIs and microservices.",
    },
  ];

  cardsData.forEach((cardData) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = document.createElement("div");
    cardHeader.className = "card__header";
    cardHeader.innerHTML = `<div>${cardData.header}</div>`;

    const cardBody = document.createElement("div");
    cardBody.className = "card__body";

    const cardBodyImage = document.createElement("div");
    cardBodyImage.className = "card__body__image";
    cardBodyImage.innerHTML = `<img src="${cardData.imageSrc}" alt="${cardData.imageAlt}">`;

    const cardBodyText = document.createElement("div");
    cardBodyText.className = "card__body__text";
    cardBodyText.innerHTML = `<div>${cardData.text}</div>`;

    cardBody.append(cardBodyImage, cardBodyText);
    card.append(cardHeader, cardBody);
    section.append(card);
  });

  document.body.append(section);
}

//console.log(data);

main();
