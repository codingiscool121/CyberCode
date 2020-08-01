  var imageUrls = imageSources;
  for(var i=0; i<fakebookData.length; i++) {
    imageUrls.push(...fakebookData[i].friends.map(s => s.image));
    imageUrls.push(...fakebookData[i].posts.map(s => s.image));
    imageUrls.push(fakebookData[i]['profile image']);
    imageUrls.push(fakebookData[i]['banner image']);
  }

  var creditsTxtHtml = 'I hope you liked this game. This game is based from CyberHaq, a game I found on Github and really liked.:<br><br>' + imageUrls.join('<br>');
