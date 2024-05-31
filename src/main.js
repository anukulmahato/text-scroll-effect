const main = document.querySelector('.main');
const heading = document.querySelector('.main h1');
const cat = document.querySelector('.cat');
const catText = document.querySelector('.cat h1');
const forestText = document.querySelector('.forest h1');

document.onscroll = () => {
    const scrollVal = window.scrollY;
    const mainH = main.clientHeight;

    console.log(scrollVal);

    // console.log(main.clientHeight);
    
    if(scrollVal <= 312 ){
        heading.style.transform = `translate(0px, ${scrollVal}px)`;
    }else{
        heading.style.transform = `translate(0px, 312px)`;
    }

    //Cat Section Start
    if(scrollVal >=main.clientHeight && scrollVal < 1302){
        catText.style.transform = `translate(0px, ${scrollVal - mainH}px)`;
        console.log('Run Cat')
    }

    if(scrollVal >= 1302){
        catText.style.transform = `translate(0px, ${1305 - mainH}px)`;
    }

    //forest Section Start
    if(scrollVal >= main.clientHeight + cat.clientHeight && scrollVal < 2228){
        forestText.style.transform = `translate(0px, ${scrollVal - (main.clientHeight + cat.clientHeight)}px)`;
    }
    if(scrollVal >=2228 ){
        forestText.style.transform = `translate(0px, ${2228 - (main.clientHeight + cat.clientHeight)}px)`
    }
}