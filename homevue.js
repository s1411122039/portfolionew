
//homepage nav
const nav =Vue.createApp({
data(){
  return{
    navLinks:[
      {name:"Home",href:"index.html",active:true},
      {name:"About me",href:"About_me.html",active:false},
      
    ],
    PortfolioLinks:[
     {name:"Painting",href:"Painting.html"},
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

const cardApp = Vue.createApp({
  data() {
    return {
      cards: [], // 存放從後端獲取的資料
    };
  },
  mounted() {
    // 使用 Ajax 獲取資料
    $.ajax({
      url: "/profolio",
      method: "get",
      dataType: "json",
      success: results => {
        this.cards = results; // 將資料賦值給 Vue 的 cards
      },
      error: err => {
        console.error("Error fetching data:", err);
      }
    });
  }
});

cardApp.mount("#card");
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
       {name:"Painting",href:"Painting.html"},
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
  //painting 
  const nav3 =Vue.createApp({
    data(){
      return{
        navLinks:[
          {name:"Home",href:"index.html",active:false},
          {name:"About me",href:"About_me.html",active:false},
          
        ],
        PortfolioLinks:[
         {name:"Painting",href:"Painting.html"},
         {name:"Photography",href:"#"},
         {name:"Game production",href:"#"},
         {name:"Animation",href:"#"} ,
        ],
      };
    },
    
    });
    
    
    nav3.mount("#nav3")

    const painting = Vue.createApp({
      data() {
        return {
          paintings: [
          
          
          ],
        };
      
      },
      mounted(){
        $.ajax({
          url: "/painting",
          method: "get",
          dataType: "json",
          success: results => {
            this.paintings = results; // 將資料賦值給 Vue 的 cards
          },
          error: err => {
            console.error("Error fetching data:", err);
          }
        });
      }
    });
    painting.mount('#painting');