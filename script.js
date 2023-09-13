const url = "/data.json";

myPromise().catch((err) => {
    console.log(err);
  });

async function myPromise () {
    const response = await fetch(url)
    const data = await response.json()
    myFunc(data)
}


// ********write with then()********* //
// const promise = fetch(url)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     return new Error("error :/");
//   })
//   .then((data) => {
//     myFunc(data);
//   })
  

function myFunc(fetchedData) {
  const $ = document;
  const OBJ = Object.entries(fetchedData) // using data keys and values

    // comment one//
    //grab values out of Data//
    const commentOneImageSrc = OBJ[1][1][0]["user"]["image"]["png"]
    const commentOneUsername = OBJ[1][1][0]["user"]["username"]
    const commentOneCreatedAt = OBJ[1][1][0]["createdAt"]
    const commentOneContent = OBJ[1][1][0]["content"]
    const commentOneScore = OBJ[1][1][0]["score"]
    // grab HTML elements //
    const commentOneImageSrcDOM = $.getElementById("one-comment-sec__avatar")
    const commentOneUsernameDOM = $.getElementById("one-comment-sec__username")
    const commentOneCreatedAtDOM = $.getElementById("one-comment-sec__created-at")
    const commentOneContentDOM = $.getElementById("one-comment-sec__content")
    const commentOneScoreDOM = $.getElementById("one-comment-sec__score")
    // put values in HTML elements //
    commentOneImageSrcDOM.setAttribute("src", commentOneImageSrc);
    commentOneUsernameDOM.innerText = commentOneUsername
    commentOneCreatedAtDOM.innerText = commentOneCreatedAt
    commentOneContentDOM.innerText = commentOneContent
    commentOneScoreDOM.innerText = commentOneScore

    // comment two//
    //grab values out of Data//
    const commenttwoImageSrc = OBJ[1][1][1]["user"]["image"]["png"]
    const commenttwoUsername = OBJ[1][1][1]["user"]["username"]
    const commenttwoCreatedAt = OBJ[1][1][1]["createdAt"]
    const commenttwoContent = OBJ[1][1][1]["content"]
    const commenttwoScore = OBJ[1][1][1]["score"]
    // grab HTML elements //
    const commenttwoImageSrcDOM = $.getElementById("two-comment-sec__avatar")
    const commenttwoUsernameDOM = $.getElementById("two-comment-sec__username")
    const commenttwoCreatedAtDOM = $.getElementById("two-comment-sec__created-at")
    const commenttwoContentDOM = $.getElementById("two-comment-sec__content")
    const commenttwoScoreDOM = $.getElementById("two-comment-sec__score")
    // put values in HTML elements //
    commenttwoImageSrcDOM.setAttribute("src", commenttwoImageSrc);
    commenttwoUsernameDOM.innerText = commenttwoUsername
    commenttwoCreatedAtDOM.innerText = commenttwoCreatedAt
    commenttwoContentDOM.innerText = commenttwoContent
    commenttwoScoreDOM.innerText = commenttwoScore

    // reply one//
    //grab values out of Data//
    const replyoneImageSrc = OBJ[1][1][1]["replies"][0]["user"]["image"]["png"]
    const replyoneUsername = OBJ[1][1][1]["replies"][0]["user"]["username"]
    const replyoneCreatedAt = OBJ[1][1][1]["replies"][0]["createdAt"]
    const replyoneContent = OBJ[1][1][1]["replies"][0]["content"]
    const replyoneScore = OBJ[1][1][1]["replies"][0]["score"]
    const replyoneReplyingTo =  OBJ[1][1][1]["replies"][0]["replyingTo"]
    // grab HTML elements //
    const replyoneImageSrcDOM = $.getElementById("one-reply-sec__avatar")
    const replyoneUsernameDOM = $.getElementById("one-reply-sec__username")
    const replyoneCreatedAtDOM = $.getElementById("one-reply-sec__created-at")
    const replyoneContentDOM = $.getElementById("one-reply-sec__content")
    const replyoneScoreDOM = $.getElementById("one-reply-sec__score")
    // put values in HTML elements //
    replyoneImageSrcDOM.setAttribute("src", replyoneImageSrc);
    replyoneUsernameDOM.innerText = replyoneUsername
    replyoneCreatedAtDOM.innerText = replyoneCreatedAt
    replyoneContentDOM.innerText = replyoneContent
    replyoneScoreDOM.innerText = replyoneScore

    // reply two//
    //grab values out of Data//
    const replytwoImageSrc = OBJ[1][1][1]["replies"][1]["user"]["image"]["png"]
    const replytwoUsername = OBJ[1][1][1]["replies"][1]["user"]["username"]
    const replytwoCreatedAt = OBJ[1][1][1]["replies"][1]["createdAt"]
    const replytwoContent = OBJ[1][1][1]["replies"][1]["content"]
    const replytwoScore = OBJ[1][1][1]["replies"][1]["score"]
    const replytwoReplyingTo =  OBJ[1][1][1]["replies"][1]["replyingTo"]
    // grab HTML elements //
    const replytwoImageSrcDOM = $.getElementById("two-reply-sec__avatar")
    const replytwoUsernameDOM = $.getElementById("two-reply-sec__username")
    const replytwoCreatedAtDOM = $.getElementById("two-reply-sec__created-at")
    const replytwoContentDOM = $.getElementById("two-reply-sec__content")
    const replytwoScoreDOM = $.getElementById("two-reply-sec__score")
    // put values in HTML elements //
    replytwoImageSrcDOM.setAttribute("src", replytwoImageSrc);
    replytwoUsernameDOM.innerText = replytwoUsername
    replytwoCreatedAtDOM.innerText = replytwoCreatedAt
    replytwoContentDOM.innerText = replytwoContent
    replytwoScoreDOM.innerText = replytwoScore

    console.log(Object.entries(fetchedData))
    console.log( Object.entries(fetchedData)[0][1]["username"])

    // add comment //
    //grab values out of Data//
    const addCommentImgSrc = OBJ[0][1]["image"]["png"]
    const addCommentUsername = OBJ[0][1]["username"]
    // grab HTML elements //
    const addCommentImgSrcDOM = $.getElementById("add-comment-sec__footer__avatar")
    const addCommentUsernameDOM = $.getElementById("add-comment-sec__input-comment")
    // put values in HTML elements //
    addCommentImgSrcDOM.setAttribute("src", addCommentImgSrc)
    
}


