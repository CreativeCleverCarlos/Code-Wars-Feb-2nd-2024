/**
 Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
**/

function removeUrlAnchor(url){
    let hashTagLocation = url.search("#")
    if (hashTagLocation == -1){
        return url
    } else{
        return url.slice(0, hashTagLocation)
    }
 
  }

  console.log(removeUrlAnchor("www.codewars.com#about"))
  console.log(removeUrlAnchor("www.codewars.com?page=1"))
  console.log(removeUrlAnchor("www.codewars.com/katas/"))