
//homepage nav
const nav =Vue.createApp({
data(){
  return{
    navLinks:[
      {name:"Home",href:"index.html",active:true},
      {name:"About me",href:"about_me.html",active:false},
      
    ],
    PortfolioLinks:[
     {name:"Painting",href:"Painting.html"},
     {name:"Photography",href:"Photography.html"},
     
     {name:"Animation",href:"Animation.html"} ,
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
            title: "Animation",
            description: "We had such a great time in LA!",
            imgSrc: "picture/littlechick01.jpg",
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
        {name:"About me",href:"about_me.html",active:true},
        
      ],
      PortfolioLinks:[
       {name:"Painting",href:"Painting.html"},
       {name:"Photography",href:"Photography.html"},
       
       {name:"Animation",href:"Animation.html"} ,
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
          {name:"About me",href:"about_me.html",active:false},
          
        ],
        PortfolioLinks:[
         {name:"Painting",href:"Painting.html"},
         {name:"Photography",href:"Photography.html"},
         
         {name:"Animation",href:"Animation.html"} ,
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
    //photography
    const nav4 =Vue.createApp({
      data(){
        return{
          navLinks:[
            {name:"Home",href:"index.html",active:false},
            {name:"About me",href:"about_me.html",active:false},
            
          ],
          PortfolioLinks:[
           {name:"Painting",href:"Painting.html"},
           {name:"Photography",href:"Photography.html"},
           
           {name:"Animation",href:"Animation.html"} ,
          ],
        };
      },
      
      });
      
      
      nav4.mount("#nav4")
      //game production
      const nav5 =Vue.createApp({
        data(){
          return{
            navLinks:[
              {name:"Home",href:"index.html",active:false},
              {name:"About me",href:"about_me.html",active:false},
              
            ],
            PortfolioLinks:[
             {name:"Painting",href:"Painting.html"},
             {name:"Photography",href:"Photography.html"},
             
             {name:"Animation",href:"Animation.html"} ,
            ],
          };
        },
        
        });
        
        
        nav5.mount("#nav5")
        //photography
        const photos = Vue.createApp({
          data() {
            return {
              photos: [], 
            };
          },
          mounted() {
            // 使用 Ajax 獲取資料
            $.ajax({
              url: "/photography",
              method: "get",
              dataType: "json",
              success: results => {
                this.photos = results; 
                this.$nextTick(() => {//用於處理確保DOM執行完成後才開始。
                  this.initializeGSAP(); // 在 DOM 更新後初始化 GSAP
                });
              },
              error: err => {
                console.error("Error fetching data:", err);
              }
            });
          },
          methods: {
            initializeGSAP() {
              // 初始化 GSAP 動畫
              const galleryImages = document.querySelectorAll(".container img");
              galleryImages.forEach(img => {
                img.addEventListener("click", event => {
                  // 設定全螢幕圖片的來源
                  const fullscreenImage = document.getElementById("fullscreen-image");
                  const overlay = document.getElementById("fullscreen-overlay");
        
                  fullscreenImage.src = event.target.src;
                  overlay.style.display = "flex";
        
                  // 添加動畫
                  gsap.fromTo(
                    fullscreenImage,
                    { opacity: 0, scale: 0.5 },
                    { opacity: 1, scale: 1, duration: 0.5 }
                  );
                });
              });
        
              const overlay = document.getElementById("fullscreen-overlay");
              overlay.addEventListener("mouseleave", () => {
                // 關閉動畫
                gsap.to("#fullscreen-image", {
                  opacity: 0,
                  scale: 0.5,
                  duration: 0.5,
                  onComplete: () => {
                    overlay.style.display = "none";
                  }
                });
              });
            }
          }
        });
        
        photos.mount("#photography");
        