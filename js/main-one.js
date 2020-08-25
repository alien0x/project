const filterContainer = document.querySelector(".menu-filter"),
      filterBtns = filterContainer.children, //it is array now
      totalFilterBtn = filterBtns.length,
      menuItems = document.querySelectorAll(".menu-item"),
      totalmenuItem = menuItems.length;

      for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add('active');

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalmenuItem ; k++){
              if(filterValue === menuItems[k].getAttribute("data-category")){
                menuItems[k].classList.add("show");
                menuItems[k].classList.remove("hide");

              }else if(filterValue === "all"){
                menuItems[k].classList.add("show");
                menuItems[k].classList.remove("hide");

              }else{
                menuItems[k].classList.add("hide");
                menuItems[k].classList.remove("show");

              }
            }

            
        })
      }

      const filterContainerCopy = document.querySelector(".special-1"),
      filterCopy = filterContainerCopy.children,
      totalFilterCopy = filterCopy.length,
      menuCopy1 = document.querySelectorAll(".special-2"),
      totalmenuItemCopy1 = menuCopy1.length;
      
     

      for(let i=0; i<totalFilterCopy; i++){
        filterCopy[i].addEventListener("click",function(){
            filterContainerCopy.querySelector('.active').classList.remove('active');
            this.classList.add('active');

            const filterValueCopy1 = this.getAttribute("data-filter");
            for(let k=0; k<totalmenuItemCopy1 ; k++){
              if(filterValueCopy1 === menuCopy1[k].getAttribute("data-category")){
                menuCopy1[k].classList.add("show");
                menuCopy1[k].classList.remove("hide");

              }else{
                menuCopy1[k].classList.add("hide");
                menuCopy1[k].classList.remove("show");

              }
            }

            
        })
      }
      

     
      const lightbox = document.querySelector(".lightbox"),
            lightboxImg = lightbox.querySelector(".lightbox-img"),
            lightboxText = lightbox.querySelector(".caption-text"),
            lightboxClose = lightbox.querySelector(".lightbox-close"),
            lightboxCounter = lightbox.querySelector(".caption-counter");

      let itemIndex=0;

      for(let i=0; i<totalmenuItem ; i++){
        menuItems[i].addEventListener("click", function(){
          itemIndex=i;
          changeItem();
          toggleLightbox();
        })
      }
       
      function nextItem(){
        if(itemIndex === totalmenuItem-1){
          itemIndex=0;
        }else{
          itemIndex++;
        }
        changeItem();
      }
      function prevItem(){
        if(itemIndex === 0){
          itemIndex=totalmenuItem-1;
        }else{
          itemIndex--;
        }
        changeItem();
      }

      function changeItem(){
        imgSrc = menuItems[itemIndex].querySelector(".menu-img img").getAttribute("src");
        lightboxImg.src= imgSrc;
        lightboxText.innerHTML=menuItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1)+ " of "+ totalmenuItem;
      }

      function toggleLightbox(){
        lightbox.classList.toggle("open");
      }
 
      lightbox.addEventListener("click",function(event){
        if(event.target === lightboxClose ||event.target === lightbox ){
          toggleLightbox(); 
        }
      })

      const nav = document.querySelector(".nav"),
            navList = nav.querySelectorAll("li"),
            totalNavList = navList.length,
            allSection = document.querySelectorAll(".section"),
            totalSection = allSection.length;
            
      for(let i=0 ; i<totalNavList ; i++){
        
        navList[i].addEventListener("click", function(){
          for(let k=0 ; k<totalNavList ; k++){
            navList[k].querySelector("a").classList.remove("active");
          }
          this.querySelector("a").classList.add("active");
          
          
          for(let i=0 ; i<totalSection ; i++){
            allSection[i].classList.remove("active");
          }
          const target = this.querySelector("a").getAttribute("href").split("#")[1];
          
          if (target === "home"){
              document.getElementById("home").classList.add("active");
          }else if (target === "choose"){
              document.getElementById("choose").classList.add("active");
          }else if (target === "service"){
              document.getElementById("service").classList.add("active");
          }else if (target === "menu"){
              document.getElementById("menu").classList.add("active");
          }else if (target === "special"){
              document.getElementById("special").classList.add("active");
          }else if (target === "book"){
              document.getElementById("book").classList.add("active");
          }else if (target === "photo"){
            document.getElementById("photo").classList.add("active");
          }else if (target === "chefs"){
          document.getElementById("chefs").classList.add("active");
          }else if (target === "contact"){
            document.getElementById("contact").classList.add("active");
         }else if (target === "footer"){
          document.getElementById("footer").classList.add("active");
        }
        })
      }
      

      

     const navToggleBtn = document.querySelector(".nav-toggle"),
          aside = document.querySelector(".aside"),
          content = document.querySelectorAll("section");

          navToggleBtn .addEventListener("click",function(){
            aside.classList.toggle("open");
            navToggleBtn.classList.toggle("open");
            for(let i=0 ; i<totalSection ; i++){
              content[i].classList.toggle("open");
            }
          })



