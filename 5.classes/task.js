class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this.state = 1.5 * this._state;
    }
    set state(stat) {
        if(stat === 0) {
            this._state = 0;
        }
        else if(stat > 100) {
            this._state = 100;
        }
        else {
            this._state = stat;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}  

 
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if(book._state > 30) {
            this.books.push(book);
        }
    }
/*    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if(book[type] === value) {
                return book;
            }
        }
        return null;
    }*/
    findBookBy(type, value) {
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }
/*    giveBookByName(bookName) {
       let book = this.findBookBy("name", bookName);
       if(book != null) {
        let index = this.books.indexOf(book);
        if (index >= 0) {
            this.books.splice(index, 1);
        }
        return book;
       }
       else {
        return null;
       }
    }*/
    giveBookByName(bookName) {
        const findResult = this.books.find((item) => item.name === bookName);
        this.books = this.books.filter((item) => item.name !== bookName);
        return findResult || null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    
    addMark(mark, subject) {
        if(subject in this.marks != true) {
            this.marks[subject] = [];
        }
        if((mark > 1) && (mark < 6)) {
            this.marks[subject].push(mark);
        }
        
    }

    getAverageBySubject (subject) {
        if(subject in this.marks != true) {
            return 0;
        }
        else {
            return this.marks[subject].reduce((a, b) => a + b) / this.marks[subject].length;
        }
    }

    getAverage () {
        let sum = 0;
        let n = 0;
        let subjs = Object.keys(this.marks);
        for(let i = 0; i < subjs.length; i++) {
            sum += this.marks[subjs[i]].reduce((a, b) => a + b);
            n += this.marks[subjs[i]].length;
        }
        return sum / n;
     }
}

 