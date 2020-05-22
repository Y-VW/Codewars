//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag(#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    let capitalWords = str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    let hashtag = "#" + capitalWords.replace(/\s+/g, '')
    if (hashtag.length > 140 || hashtag.length <= 1) return false
    else return hashtag
}

//first step is to capitalize every first letter of every word
//second step is to remove all spaces and insert an hashtag
//third step is to check if the hashtag is empty or longer than 140 characters
