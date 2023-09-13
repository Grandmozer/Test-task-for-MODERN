function search(){
    const inputSearch = document.getElementById("input-search");
        closeSearch = document.getElementById("close-search");
        btnSearch = document.getElementById("btn-search");
        formSearch = document.getElementById("form-search");
        burger = document.getElementById("burger");
        logoHeader = document.getElementById("logoHeader");
        // information = document.querySelectorAll('.s');
    
    btnSearch.addEventListener('click', () => {
      inputSearch.classList.add('input-search-active');
      inputSearch.classList.remove('input-search');
      formSearch.classList.remove('search-off');    
      formSearch.classList.add('search-active');
      closeSearch.classList.add('btn-close-search-active');
      // FindOnPage('text-to-find');
    
      if(window.matchMedia("(max-width: 768px)").matches){
        logoHeader.classList.add('do-not-display');
      }  
      if(window.matchMedia("(max-width: 550px)").matches){
        burger.classList.add('do-not-display');
      }
    });
    closeSearch.addEventListener('click', () => {
        inputSearch.classList.remove('input-search-active');
        inputSearch.classList.add('input-search');
        formSearch.classList.add('search-off');    
        formSearch.classList.remove('search-active');
        closeSearch.classList.remove('btn-close-search-active');
        logoHeader.classList.remove('do-not-display');
        burger.classList.remove('do-not-display');
        
        inputSearch.value = '';
    });
   
    }
    search();
    