
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
      cards: [],
    };
  },
  mounted() {
    // 從伺服器獲取資料
    fetch('http://localhost:3001/porfolio')
      .then(response => response.json())
      .then(data => {
        this.cards = data;  // 用伺服器的資料更新 cards
      })
      .catch(error => {
        console.error("獲取資料錯誤:", error);
      });
  }
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