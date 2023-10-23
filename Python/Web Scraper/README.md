# Web Scraping and Link Crawling Script

This Python script is designed for web scraping and link crawling. It utilizes the BeautifulSoup library to parse web pages and extract internal and external links from a starting URL. The script recursively follows external links, providing a way to explore and analyze the link structure of websites. Here's how the script works:

## Prerequisites

Before using this script, ensure you have the following Python libraries installed:

- `urlopen` from `urllib.request`: For making HTTP requests to fetch web pages.
- `BeautifulSoup`: For parsing HTML and extracting links from web pages.
- `re`: The regular expression module to perform pattern matching.
- `datetime`: To generate a random seed based on the current date and time.

You can install these libraries using pip:

```
pip install beautifulsoup4
```

## How to Use the Script

1. Import the required libraries at the beginning of your Python script.
2. Define a starting URL (`startingSite`) as the entry point for crawling.
3. Run the `followExternalOnly` function with the starting URL as the argument.
4. The script will recursively follow external links found on each page, printing the random external links it discovers.

## Functions

### `getInternalLinks(bsObj, includeUrl)`

This function extracts a list of internal links (links within the same domain) from the given BeautifulSoup object.

### `getExternalLinks(bsObj, excludeUrl)`

This function extracts a list of external links (links to other domains) from the given BeautifulSoup object.

### `splitAddress(address)`

This function extracts the domain from a full URL by removing the "http://" and splitting the remaining string by "/".

### `getRandomExternalLink(startingPage)`

This function retrieves a random external link from a given starting page. If no external links are found, it selects a random internal link from the same page.

### `followExternalOnly(startingSite)`

This is the main function that initiates the link crawling process. It begins at the `startingSite`, selects a random external link, and recursively follows external links, printing them along the way.

## Example Usage

```python
followExternalOnly("http://oreilly.com")
```

This script will start crawling from the "http://oreilly.com" website and print out random external links as it progresses.

Remember to use this script responsibly and in compliance with website terms of service and legal requirements. Web scraping can have legal and ethical implications, so always respect the rules and guidelines of the websites you're interacting with.