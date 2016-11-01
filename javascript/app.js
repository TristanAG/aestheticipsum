$( 'document' ).ready( function(){

  $( '.sentance' ).html(makeManyParagraphs())

  function makeManyParagraphs() {
    multiParagraph = ''
    for (k = 0; k < 4; k++){
      multiParagraph += makeParagraph()
    }
    return multiParagraph
  }

  function makeParagraph() {
    paragraph = ''
    for (j = 0; j < 4; j++){
      paragraph += makeSentace()
    }
    return '<p>' + paragraph + '</p>'
  }

  function makeSentace() {
    words = ['vaporwave', 'a e s t h e t i c', 'meme', 'You\'ve got mail', 'remember summer days', 'mallsoft', 'where am i', 'I M D R E A M I N G', 'where are you going', '100% satisfaction guaranteed']

    sentance = ''
    for(i = 0; i < 10; i++){
      num = Math.floor(Math.random()*10)
      if(i < 9){
        sentance += words[num] + ' '
      } else if( i == 9) {
        sentance += words[num] + '. '
      }
    }

    return sentance
  }
})