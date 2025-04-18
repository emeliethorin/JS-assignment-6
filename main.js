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