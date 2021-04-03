{
    'use strict';

    const select = {
        templateOf: {
            book: '#template-book',
        }

    
    };

    const classes = {
        booksList: '.books-list',
    }
    const templates = {
        bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
      };

    class BookList {
        constructor(){
            this.getElements();
            this.render();
        }

        getElements(){
            this.booksList = document.querySelector(classes.booksList);

        }

        render(){
            for(let book of dataSource.books){

                const generatedHTML = templates.bookTemplate(book);
                const element = utils.createDOMFromHTML(generatedHTML);
                this.booksList.appendChild(element);
            }

        
        }

    }
    const app = new BookList;

}