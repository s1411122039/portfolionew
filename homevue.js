const card = Vue.createApp({
    data() {
      return {
        cards: [
          {
            title: "Painting",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/basketballbook.png",
          },
          {
            title: "Photography",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/IMG_9262 (1).jpg",
          },
          {
            title: "Game production",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/IMG_0954.JPG",
          },
          {
            title: "Animation",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/AnyConv.com__littlechick (1).jpg",
          },
        ],
      };
    },
  });
  card.mount("#card");