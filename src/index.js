import $ from 'jquery'

$(document).ready(() => {
let apiUrl = 'https://wordwatch-api.herokuapp.com/api/v1/top_word'
  $.ajax({
      url: apiUrl,
      context: document.body,
      success: function(result){
        let topWord = Object.keys(result.word)[0]
        let topWordCount = Object.values(result.word)[0]
        $('.word-count').html(`${topWord}: ${topWordCount}`)
      }
  })
});
