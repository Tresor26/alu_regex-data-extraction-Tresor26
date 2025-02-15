function analyzeText() {
    const inputText = document.getElementById('inputText').value;

    const regexPatterns = {
        email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?\b/g,
        phone: /\b(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g,
        url: /\bhttps?:\/\/(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,6}(?:\/[^\s]*)?\b/g,
        creditCard: /\b(?:\d{4}[- ]?){3}\d{4}|\d{15,16}\b/g,
        time: /\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM))\b|\b((2[0-3]|[01]?[0-9]):[0-5][0-9])\b/g,
        hashtag: /#\w*[A-Za-z0-9_]+\w*/g,
    };

    const results = {};
    for (const [key, pattern] of Object.entries(regexPatterns)) {
        results[key] = inputText.match(pattern) || [];
    }

    displayResults(results);
}

function displayResults(results) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '<h2>Analysis Results</h2>';

    for (const [key, matches] of Object.entries(results)) {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        let listItems;
        if (matches.length > 0) {
            listItems = matches.map(match => 
                `<li>${match} <span class="valid-badge">✔ Valid</span></li>`
            ).join('');
        } else {
            listItems = `<li style="color: red;">No match found</li>`;
        }

        resultItem.innerHTML = `
            <h3>${key.replace(/([A-Z])/g, ' $1').trim()} (${matches.length})</h3>
            <ul>${listItems}</ul>
        `;

        resultsSection.appendChild(resultItem);
    }
}

