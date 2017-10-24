# image-search

# FreeCodeCamp API: Image Search Abstraction Layer
## User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example query usage:

```text
http://localhost:3000/api/imagesearch/computer?offset=2
http://localhost:3000/api/latest
```

## Example query output:

[{
"title": "File:A view of Antarctica's ice sheet and mountains.jpeg - Wikimedia ...",
"url": "https://commons.wikimedia.org/wiki/File:A_view_of_Antarctica%E2%80%99s_ice_sheet_and_mountains.jpeg",
"snippet": "English: A view of Antarctica's ice sheet and mountains seen from a U.S. Air 
National Guard LC-130 aircraft during a flight to the South Pole in December 
2012."
},
{
"title": "File:Mountain Cry poster.jpeg - Wikipedia",
"url": "https://en.wikipedia.org/wiki/File:Mountain_Cry_poster.jpeg",
"snippet": "Mountain Cry · Portion used. The entire poster: because the image is poster art, a 
form of product packaging or service marketing, the entire image is needed to ..."
}]
```

## Example latest output:

```js
[{
"imgSearch": "clock",
"date": "Tue Oct 24 2017 10:51:00 GMT+0100 (IST)"
},
{
"imgSearch": "table",
"date": "Tue Oct 24 2017 10:48:06 GMT+0100 (IST)"
}]
