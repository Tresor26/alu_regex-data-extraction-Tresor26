# Regex Text Analyzer

A web-based tool that extracts specific patterns from user-provided text using **Regular Expressions (Regex)**. It identifies **emails, phone numbers, URLs, credit card numbers, timestamps, and hashtags** while handling various edge cases.

##  Features
-  Extracts emails, phone numbers, URLs, credit cards, times, and hashtags.
-  Handles multiple formats and edge cases.
-  Displays results inside a structured UI.
-  Indicates when no matches are found.


##  Setup Instructions

### 1 Clone the Repository
```sh
git clone https://github.com/Tresor26/alu_regex-data-extraction-Tresor26.git
cd alu_regex-data-extractio-Tresor26
2️⃣ Open the Project
Simply open index.html in your browser.

Usage Instructions
Paste or type text into the input box.
Click the Analyze button.
The extracted matches will be displayed.
If no match is found for a specific pattern, a message will indicate that.
🏗️ Technologies Used
HTML5 - Structure of the web app.
CSS3 - Styling and responsive design.
JavaScript (ES6) - Core logic and Regex-based text processing.
🔍 Regex Patterns Used
Pattern:
Email	/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?\b/g	Matches valid email formats.

Phone	/\b(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g	Supports international and local formats.

URL	/\bhttps?:\/\/(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,6}(?:\/[^\s]*)?\b/g	Detects website URLs.

Credit Card	`/\b(?:\d{4}[- ]?){3}\d{4}	\d{15,16}\b/g`

Time	`/\b((1[0-2]	0?[1-9]):[0-5][0-9]\s?(AM

Hashtag	/#\w*[A-Za-z0-9_]+\w*/g	Finds hashtags used on social media.

Edge Case Handling
Emails: Supports subdomains like user@mail.co.uk.
Phone Numbers: Allows formats with dashes, dots, spaces, and country codes.
URLs: Detects links with http, https, and www.
Credit Cards: Accepts both spaced (1234 5678 9012 3456) and non-spaced formats.
Times: Recognizes both AM/PM and 24-hour formats.
Hashtags: Ensures only valid characters (#My_Hashtag123).

License
This project is open-source