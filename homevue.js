
const app = Vue.createApp({
    data() {
      return {
        activeIndex: 0, // 用來記錄當前顯示的圖片索引
        carouselItems: [
          {
            title: "Painting",
            description: "We had such a great time in LA!",
            imgSrc: "picture/monster.jpg",
            alt: "Painting"
          },
          {
            title: "Photography",
            description: "We had such a great time in LA!",
            imgSrc: "picture/IMG_8383.jpg",
            alt: "Photography"
          },
          {
            title: "Game production",
            description: "We had such a great time in LA!",
            imgSrc: "picture/gamedevelop.jpg",
            alt: "Game production"
          },
          {
            title: "Animation",
            description: "We had such a great time in LA!",
            imgSrc: "picture/gamedevelop.jpg",
            alt: "Animation"
          }
        ]
      };
    },
});
app.mount("#carousel");

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