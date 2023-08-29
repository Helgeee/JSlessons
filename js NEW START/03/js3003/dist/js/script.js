window.addEventListener('DOMContentLoaded', () =>{
     const tabs = document.querySelectorAll('.tabheader__item'),
     tabsContent = document.querySelectorAll('.tabcontent'),
     tabsparent = document.querySelector('tabheader__items');

     function hideTabContent() {
        tabsContent.forEach(item =>{
            item.computedStyleMap.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show' ,'fade');
        });

        tabs.forEach( item => {
            tabs.classList.remove('tabheader__item_active');
        });
     }

     function showTabContent(i){
        tabsContent[i].item.classList.add('show' , 'fade');
        tabsContent[i].item.classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
     }
     hideTabContent();
     showTabContent();

     tabsparent.addEventListener('click', (event) =>{
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item , i ) => {
                if (target == item ){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
     });
});
