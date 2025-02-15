function analyzeText() {
    const inputText = document.getElementById('inputText').value;

    const regexPatterns = {
        email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        phone: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
        url: /https?:\/\/[^\s]+/g,
        creditCard: /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,
        time: /\b(1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)\b|\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g,
        hashtag: /#\w+/g,
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
        if (matches.length === 0) continue;

        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        let listItems = matches.map(match => 
            `<li>${match} <span class="valid-badge">✔ Valid</span></li>`
        ).join('');

        resultItem.innerHTML = `
            <h3>${key.replace(/([A-Z])/g, ' $1').trim()} (${matches.length})</h3>
            <ul>${listItems}</ul>
        `;

        resultsSection.appendChild(resultItem);
    }
}
