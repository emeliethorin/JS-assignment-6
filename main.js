function mainMenu() {
    let choice;

    do {
        choice = prompt(`
        Welcome to your library!
        Make a choice:
        1) Add a book. 2) View books. 3) Mark a book as read. 4) Remove book. 5) Exit.`)
    
        switch (choice) {
            case "1": addBook();
            break;
            case "2": listBooks();
            break;
            case "3": const title = prompt("Enter the title of a book you want to mark as read:");
            markAsRead(title);
            break;
            case "4": removeBook();
            break;
            case "5":
            alert("Goodbye!");
            break;
            default:
            alert("Invalid choice. Make a choice from 1-5.");
        }
    } while (choice !== "5");
}

let library = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        isRead: true
    },
    {
        title: "Pippi Långstrump",
        author: "Astrid Lindgren",
        isRead: false
    }
];

function addBook() {
    let title = prompt("What is the title of the book?");
    let author = prompt("Who is the author?");
    let isReadInput = prompt("Have you read this book? Answer by yes or no");
    let isRead = isReadInput.toLowerCase() === "yes";

    let newBook = {
        title: title,
        author: author,
        isRead: isRead,
    }

    library.push(newBook);
    alert (`${title} by ${author} added to your library`);
    listBooks();
}

function listBooks() {
    console.log("Your library:");
    library.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" by ${book.author}: ${book.isRead ? "Read" : "Unread"}`);
    });
}

function markAsRead(title) {
    let book = library.find(b => b.title.toLowerCase() === title.toLowerCase());
    if (book) {
        book.isRead = true;
        alert(`"${book.title}" has been marked as read.`);
    } else {
        alert("Book not found.");
    }
}

function removeBook() {
    console.log("Your current library contains:");
    library.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" by ${book.author}. ${book.isRead ? "Read" : "Unread"}`);
    });

    const input = prompt("Enter the number of the book you want to remove");
    const index = parseInt(input);
    const zeroBasedIndex = index - 1;

    if (!isNaN(zeroBasedIndex) && index >= 0 && zeroBasedIndex < library.length) {
        const removedBook = library.splice(zeroBasedIndex, 1)[0];
        alert(`${removedBook.title} has been removed from your library.`);
    } else {
        alert("Invalid number. No book was removed.");
        return library;
    }
}

mainMenu();