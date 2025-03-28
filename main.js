document.addEventListener('DOMContentLoaded', function() {
    // 🔒 Password Protection with Custom Modal
    const passwordModal = document.getElementById("passwordModal");
    const submitPassword = document.getElementById("submitPassword");
    const passwordInput = document.getElementById("passwordInput");

    // Show Modal Initially
    passwordModal.style.display = "flex";

    submitPassword.addEventListener("click", function() {
        const password = "19291"; // Set your password
        if (passwordInput.value === password) {
            passwordModal.style.display = "none"; // Hide modal on correct password
        } else {
            alert("Incorrect password. Access denied.");
            window.location.href = "about:blank"; // Redirect if wrong password
        }
    });

    // 📚 Default NCERT Book Item (ONLY ONCE)
    const bookList = document.getElementById('bookList');
    const ncertItem = document.createElement('li');

    // Make the entire <li> clickable
    ncertItem.style.cursor = "pointer";
    ncertItem.onclick = function() {
        window.open("/common_repo/New.html", "_blank"); // Open NCERT in a new tab
    };

    // 📌 NCERT Title
    const titleSpan = document.createElement('span');
    titleSpan.textContent = "NCERT";
    ncertItem.appendChild(titleSpan);

    // 🖼 NCERT Logo
    const logoImg = document.createElement('img');
    logoImg.src = "ncert.png"; // Correct path for NCERT logo
    logoImg.alt = "NCERT Logo";
    logoImg.classList.add('file-icon');
    ncertItem.appendChild(logoImg);

    // ❌ Remove Button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Prevent opening NCERT link when clicking Remove button
    removeBtn.onclick = function(event) {
        event.stopPropagation(); // Stops <li> onclick from firing
        ncertItem.remove();
    };
    ncertItem.appendChild(removeBtn);

    // Add NCERT item to the book list (ONLY ONCE)
    bookList.appendChild(ncertItem);

    // ➕ Add New Books
    document.getElementById('addBookButton').addEventListener('click', function() {
        const bookTitle = document.getElementById('bookTitle').value.trim();
        const bookFile = document.getElementById('bookFile').files[0];

        if (bookTitle && bookFile) {
            const li = document.createElement('li');

            // Make each book item clickable
            li.style.cursor = "pointer";
            li.onclick = function() {
                window.open(URL.createObjectURL(bookFile), "_blank");
            };

            // 📌 Book Title
            const titleSpan = document.createElement('span');
            titleSpan.textContent = bookTitle;
            li.appendChild(titleSpan);

            // 📄 PDF Icon (Updated Path)
            const fileLink = document.createElement('img');
            fileLink.src = "pdf.png"; // ✅ Correct PDF icon path
            fileLink.alt = "PDF Icon";
            fileLink.classList.add('file-icon');
            li.appendChild(fileLink);

            // ❌ Remove Button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-btn";

            // Prevent opening book file when clicking Remove button
            removeBtn.onclick = function(event) {
                event.stopPropagation(); // Stops <li> onclick from firing
                li.remove();
            };
            li.appendChild(removeBtn);

            // Add book to list
            bookList.appendChild(li);

            // Clear input fields
            document.getElementById('bookTitle').value = '';
            document.getElementById('bookFile').value = '';
        } else {
            alert('Please enter a book title and attach a PDF file.');
        }
    });
});