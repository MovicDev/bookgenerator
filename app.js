    // let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=705303948810324980db093f63a51039&units=metric`
    // fetch(url).then(response => response.json())
    // .then((convertedResponse) => {
    //     console.log(convertedResponse)
    // }
    // )

//     const url = 'https://ali-express1.p.rapidapi.com/a2660b6bbdmshceff0291ed1776cp1abe02jsn06fab24cebaf';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '978bd4c0f3msh57e9a53bbad372ep189218jsnc2d8fc18fe2e',
// 		'x-rapidapi-host': 'ali-express1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// Replace this with your Google Books API key
// const apiKey = 'AIzaSyAl6Tj7ze9Hf0-gdjRDxOnNrdbB5DyYIS0';
// document.getElementById('book-search-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const query = document.getElementById('search-query').value;
//     searchBooks(query);
// });

// function searchBooks(query) {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             displayResults(data.items);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// function displayResults(books) {
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = '';

//     if (!books) {
//         resultsDiv.innerHTML = '<p>No books found.</p>';
//         return;
//     }

//     books.forEach(book => {
//         const bookItem = document.createElement('div');
//         bookItem.className = 'book-item';

//         const title = book.volumeInfo.title;
//         const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
//         const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/100';
//         const previewLink = book.volumeInfo.previewLink || '#';  // Link to preview the book
//         const buyLink = book.saleInfo.buyLink || '#';  // Link to buy the book (if available)

//         bookItem.innerHTML = `
//         <div class="" <div class="" style="max-weight=18rem; background-color:black; color:#fff; padding: 10px ">>
//             <img src="${thumbnail}" alt="${title}">
//             <h3>${title}</h3>
//             <p>Author(s): ${authors}</p>
//             <p><strong>Description:</strong> ${book.volumeInfo.description ? book.volumeInfo.description.substring(0, 200) + '...' : 'No description available.'}</p>
//             <a href="${previewLink}" target="_blank" class="preview-btn">Read More</a>
//             ${buyLink !== '#' ? `<a href="${buyLink}" target="_blank" class="buy-btn">Buy</a>` : ''}
//             </div>
//         `;

//         resultsDiv.appendChild(bookItem);
//     });
// }
const apiKey = 'AIzaSyAl6Tj7ze9Hf0-gdjRDxOnNrdbB5DyYIS0';
document.getElementById('book-search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const query = document.getElementById('search-query').value;
    searchBooks(query);
});

function searchBooks(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

    fetch(url).then(response => response.json())
        .then((data) => {
            const results = document.getElementById('results');
            results.innerHTML = ''; 

            data.items.forEach(item => {
                const book = item.volumeInfo;
                const title = book.title || 'No title available';
                const authors = book.authors ? book.authors.join(', ') : 'No authors available';
                const description = book.description ? book.description.substring(0, 150) + '...' : 'No description available';
                const imageLink = book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/150';
                const previewLink = book.previewLink || '#';

                results.innerHTML += `
                    <div style="max-width: 18rem;display-flex; background-color: black; color: #fff; padding: 10px; margin-bottom: 15px;">
                        <img src="${imageLink}" alt="Book cover" style="width: 100%; height: auto;">
                        <h3>${title}</h3>
                        <p>Author(s): ${authors}</p>
                        <p>${description}</p>
                        <a href="${previewLink}" target="_blank" style="color: yellow;">Read more</a>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
