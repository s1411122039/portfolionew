
//homepage nav
const nav =Vue.createApp({
data(){
  return{
    navLinks:[
      {name:"Home",href:"index.html",active:true},
      {name:"About me",href:"About_me.html",active:false},
      
    ],
    PortfolioLinks:[
     {name:"Painting",href:"#"},
     {name:"Photography",href:"#"},
     {name:"Game production",href:"#"},
     {name:"Animation",href:"#"} ,
    ],
  };
},

});


nav.mount("#nav")



const carousel = Vue.createApp({
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
carousel.mount("#carousel");

const card = Vue.createApp({
    data() {
      return {
        cards: [
          {
            title: "Painting",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/basketballbook.png",
            link:"#"
          },
          {
            title: "Photography",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/IMG_9262 (1).jpg",
            link:"#"
          },
          {
            title: "Game production",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/IMG_0954.JPG",
            link:"#"
          },
          {
            title: "Animation",
            text: "Some example text. John Doe is an architect and engineer.",
            imgSrc: "picture/AnyConv.com__littlechick (1).jpg",
            link:"#"
          },
        ],
      };
    },
  });
  card.mount("#card");
//about me html
  //about me nav
const nav2 =Vue.createApp({
  data(){
    return{
      navLinks:[
        {name:"Home",href:"index.html",active:false},
        {name:"About me",href:"About_me.html",active:true},
        
      ],
      PortfolioLinks:[
       {name:"Painting",href:"#"},
       {name:"Photography",href:"#"},
       {name:"Game production",href:"#"},
       {name:"Animation",href:"#"} ,
      ],
    };
  },
  
  });
  
  
  nav2.mount("#nav2")
  const aboutmelink =Vue.createApp({
    data(){
      return{
        socialLinks:[
          {name:"Facebook",href:"#"},
          {name:"Github",href:"#"}
          
        ],
      };
    },
  });
  aboutmelink.mount("#aboutmelink")