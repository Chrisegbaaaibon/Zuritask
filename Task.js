var fs = require('fs');

fs.writeFile("Posts.json", `
[
    {
      "UserId": 1,
      "Id": 1,
      "Title": "to provide or to reject the blind are welcome option to find",
      "Body": "And it takes \ nsuscipit follow accepted lightly with \ nreprehenderit discomfort may be the entire \ nnostrum of the things that happens is that they are extremely"
    },
    {
      "UserId": 1,
      "Id": 2,
      "Title": "that was",
      "Body": "is existed at the time of life \ 'Blessed are the pain of her pains, nor condemn nseq they are nothing \ nfugiat or not at all the blandishments of pleasure, and the discomfort may rejecting some \ nWho, not being due, we may be able to open the man who did not, but there is no"
    },
    {
      "UserId": 1,
      "Id": 3,
      "Title": "those who reject the troubles they exercise that is either",
      "Body": "and on the right, but \ nvoluptatis blinded to the election or \ nvoluptatis pains or denouncing any resultant \ nmolestiae on his work and wants to hate or"
    },

  ]`, (err) => {
      if (err) throw err;
      console.log('Successful!')
  });

  
  