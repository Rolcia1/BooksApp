{
  'use strict';

  const select = {
    templateOf: {
      book: '#template-book',
    },

    booksCover: {
      images: 'book__image',
    },

    filters: '.filters'
    
  };

  const classes = {
    booksList: '.books-list',
    books: {
      favoriteBook: 'favorite',
    }


  };
  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
  };

  class BookList {
    constructor(){
        
      this.getElements();
      this.render();
      this.initActions();
    }

    getElements(){
      this.booksList = document.querySelector(classes.booksList);
      this.favoriteBooks = [];
      this.filters = [];
      this.filterWrapper = document.querySelector(select.filters);

    }

    render(){

      for(let book of dataSource.books){

        const generatedHTML = templates.bookTemplate(book);
        const element = utils.createDOMFromHTML(generatedHTML);
        this.booksList.appendChild(element);
      }

        
    }


    initActions(){
      const thisBooksApp = this;
    
      //const booksContainer = document.querySelector(classes.booksList);//
       
      //nasłuchiwacz uruchamiający dbclick i zatrzymujący domyślne zachowanie
      thisBooksApp.booksList.addEventListener('dblclick', function(event){
        event.preventDefault();
                
        const clickElem = event.target.offsetParent;
        if(clickElem.classList.contains(select.booksCover.images)){
          const idBook = clickElem.getAttribute('data-id');

          if(!thisBooksApp.favoriteBooks.includes(idBook)){
            clickElem.classList.add(classes.books.favoriteBook); 
            thisBooksApp.favoriteBooks.push(idBook);
          } else {
            clickElem.classList.remove(classes.books.favoriteBook);
            thisBooksApp.favoriteBooks.splice(thisBooksApp.favoriteBooks.indexOf(idBook), 1);
          }
        }                    
                
      });

      this.filterWrapper.addEventListener('click', function(event){
        event.preventDefault();
        const clickedForm = event.target;
        if((clickedForm.type === 'checkbox' && clickedForm.tagName === 'INPUT' && clickedForm.name === 'filter'){
          if (clickedForm.checked == true) {
            thisBooksApp.filters.push(clickedForm.value);
          } else {
            this.filterWrapper.filters.splice(thisBooksApp.filters.indexOf(clickedForm.value), 1);
          }
        }
        this.filterWrapper.filterBooks();
      });

      filterBooks() {
        const thisBooksApp = this;

        for(let book of thisBooksApp.data){
          let shouldBeHidden = false;
      
          for(const filter of thisBooksApp.filters){
            if(!book.details[filter]){
              shouldBeHidden = true;
              break;
            }
          }
        
          if (shouldBeHidden) {
            const bookCover = document.querySelector('.book__image[data-id="' + book.id + '"]');
            bookCover.classList.add('hidden');
          } else {
            const bookCover = document.querySelector('.book__image[data-id="' + book.id + '"]');
            bookCover.classList.remove('hidden');
          }
        }
          

      }
      


    }
   

  }
  const app = new BookList(); // eslint-disable-line no-unused-vars
}