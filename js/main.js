window.onload = function(){
    var swiper = new Swiper(".main_visual", {
        /* spaceBetween: 30,
        centeredSlides: true, */
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }); //swiper main_visual


    let hd = document.getElementsByTagName('header')[0];
    let business = document.getElementsByClassName('business')[0]
    let businessTitle = business.getElementsByClassName('title')[0];

    window.onscroll = function(){
        let scrollBar = window.scrollY; //현재 스크롤바
        //console.log(hd.offsetTop)
        if(hd.offsetTop < scrollBar) {
            hd.classList.add('on');
        } else {
            hd.classList.remove('on')
        }

        if(businessTitle.offsetTop / 3 < scrollBar) {
            businessTitle.classList.add('on');
        } else {
            businessTitle.classList.remove('on');
        }
        

        let result = document.getElementsByClassName('result')[0];
        let resultTitle = result.getElementsByTagName('h3')[0]
        let resultTextList = result.getElementsByClassName('text_list')[0]
        console.log(resultTitle.offsetTop)
        console.log(scrollBar)
        if(resultTitle.offsetTop - 500 < scrollBar ) {
            resultTitle.classList.add('on')
        } else {
            resultTitle.classList.remove('on')
        }

    }//scroll event

    let businessMenuList = business.getElementsByClassName('business_menu')[0]
    let businessMenu = businessMenuList.getElementsByTagName('li');
    let businessItem = business.getElementsByClassName('item');
    
    for(let i = 0; i < businessItem.length; i++) {
         
        businessMenu[i].onclick = function(){
            businessMenu[0].classList.remove('on')
            businessMenu[1].classList.remove('on')
            businessMenu[2].classList.remove('on')
            
            businessMenu[i].classList.add('on')

            businessItem[0].classList.remove('on')
            businessItem[1].classList.remove('on')
            businessItem[2].classList.remove('on')
           
            businessItem[i].classList.add('on')
        }
    }
}