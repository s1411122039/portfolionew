
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
          {name:"Facebook",href:"https://www.facebook.com/profile.php?id=100001953610471"},
          {name:"Github",href:"https://github.com/s1411122039"}
          
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
            { title: "光柵動畫", description: "", imgsrc: "picture/time.jpg" },
            { title: "手繪怪物設計", description: "", imgsrc: "picture/monster.jpg" },
            { title: "手繪人體設計", description: "", imgsrc: "picture/body.jpg" },
            { title: "手翻書", description: "", imgsrc: "picture/basketballbook.png" },
            { title: "材質縫合", description: "", imgsrc: "picture/02.jpg" },
            { title: "點線面繪畫", description: "", imgsrc: "picture/03.jpg" }
          ]
        };
      },
      mounted() {
        $.ajax({
          url: "/painting",
          method: "get",
          dataType: "json",
          success: results => {
            this.paintings = results; // 將資料賦值給 Vue 的 paintings
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
                this.photos = results; // 更新數據，觸發 Vue 的更新
              },
              error: err => {
                console.error("Error fetching data:", err);
              }
            });
          },
          updated() {
            // 每次 DOM 更新後初始化 GSAP
            this.initializeGSAP();
          },
          methods: {
            initializeGSAP() {
              // 初始化 GSAP 動畫
              const galleryImages = document.querySelectorAll(".container img");
              const overlay = document.getElementById("fullscreen-overlay");
              const fullscreenImage = document.getElementById("fullscreen-image");
        
              galleryImages.forEach(img => {
                img.addEventListener("click", event => {
                  // 檢查虛擬視窗是否已顯示
                  if (overlay.style.display === "flex") {
                    // 關閉虛擬視窗
                    gsap.to("#fullscreen-image", {
                      opacity: 0,
                      scale: 0.5,
                      duration: 0.5,
                      onComplete: () => {
                        overlay.style.display = "none";
                      }
                    });
                  } else {
                    // 顯示虛擬視窗
                    fullscreenImage.src = event.target.src;
                    overlay.style.display = "flex";
        
                    // 添加動畫
                    gsap.fromTo(
                      fullscreenImage,
                      { opacity: 0, scale: 0.5 },
                      { opacity: 1, scale: 1, duration: 0.5 }
                    );
                  }
                });
              });
        
              // 添加虛擬視窗的額外關閉功能
              overlay.addEventListener("click", () => {
                // 關閉虛擬視窗
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
        