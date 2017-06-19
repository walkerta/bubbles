const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum')
//virtual prefix and an absolute path.

app.listen(3000, function () {
  console.log('Successfully started express application!');
})


   var output     = loremIpsum({
    count: 3                      // Number of words, sentences, or paragraphs to generate.
  , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
  , format: 'html'               // Plain text or html
                 // The character to insert between paragraphs. Defaults to default EOL for your OS.
});


  app.get('/lorem', function (req,res) {
    res.send(output);

  });
