{
  'use strict';

  const select = {
    templateOf: {
      book: '#template-book',
    },

    booksCover: {
        images: '.book__image',
      },
    
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
        const booksContainer = document.querySelector(classes.booksList);
       
            //nasłuchiwacz uruchamiający dbclick i zatrzymujący domyślne zachowanie
            thisBooksApp.booksList.addEventListener('dblclick', function(event){
                event.preventDefault();
                
                const clickElem = event.target.offsetParent;
                if(clickElem.classList.contains(select.booksCover.images)){
                    const idBook = image.getAttribute('data-id');
                    
                    if(!thisBooksApp.favoriteBooks.includes(idBook)){
                       image.classList.add(classes.books.favoriteBook); 
                       thisBooksApp.favoriteBooks.push(idBook);
                    } else {
                        image.classList.remove(classes.books.favoriteBook);
                        thisBooksApp.favoriteBooks.splice(thisBooksApp.favoriteBooks.indexOf(idBook), 1);
                    }
                }                    
                
            });

    }
   

  }
  const app = new BookList(); // eslint-disable-line no-unused-vars
}