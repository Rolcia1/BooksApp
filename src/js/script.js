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
        const booksContainer = document.querySelector(classes.booksList);
        const booksImage =booksContainer.querySelectorAll(select.booksCover.images);
        //pętla po każdym booksImage
        for (let image of booksImage) {
            //nasłuchiwacz uruchamiający dbclick i zatrzymujący domyślne zachowanie
            image.addEventListener('dblclick', function(event){
                event.preventDefault();
                image.classList.add(classNames.books.favoriteBook);
                const idBook = image.getAttribute('data-id');
                favoriteBooks.push(idBook);
            });
        }

    }
   

  }
  const app = new BookList();
  app;
}