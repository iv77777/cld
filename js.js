document.addEventListener('click', (e) =>{
  if (e.target.closest('.calendar__month-inner_js')){
    const calendarMonthInner = e.target.closest('.calendar__month-inner_js');
    const calendarMonthWrapper = e.target.closest('.calendar__month-wrapper_js');

    calendarMonthInner.classList.toggle('_active');

    const MonthWrapperWidth = calendarMonthWrapper.offsetWidth;
    const windowInnerHeight = window.innerHeight;

    const MonthWrapperLeft = calendarMonthWrapper.offsetLeft;

    const MonthInnerWidth = calendarMonthInner.offsetWidth;
    const MonthInnerHeight = calendarMonthInner.offsetHeight;
    const MonthInnerLeft = calendarMonthInner.offsetLeft - MonthWrapperLeft;


    let scale = MonthWrapperWidth / MonthInnerWidth;
    // let scale = 2;
    if (scale > 3) {
      scale = 3;
    }

    if (calendarMonthInner.classList.contains("_active")){ 
      const MonthInnerTop = calendarMonthInner.getBoundingClientRect().top;
      let ttX = (MonthWrapperWidth / 2) - (MonthInnerWidth / 2) - MonthInnerLeft;
      let ttY = (windowInnerHeight / 2) - (MonthInnerHeight / 2) - MonthInnerTop;    

      calendarMonthInner.style.cssText = `transform: scale(${scale}) 
                                          translate(${ttX / scale}px, ${ttY / scale}px)`;
    }else{
      calendarMonthInner.style.cssText = '';
    }
                          
  }
});
