var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('The User Profile API is used to get social profile data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getUserProfile(variables.access_token).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The photo API is used to get photo data from the user’s social account', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getPhotos(variables.access_token,variables.albumId).then(function(response){
  expect(response.AlbumId).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Check In API is used to get check-ins data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getCheckins(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Albums API is used to get the Albums data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getAlbums(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Audio API is used to get audio files data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getAudios(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Mention API is used to get mention data from the user’s social account', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getMentions(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Following API is used to get the followers’ information', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getFollowings(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Event API is used to get the event data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getEvents(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Post API is used to get posted messages', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getPosts(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Company API is used to get the followed company’s data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getCompanies(variables.access_token).then(function(response){
  expect(response[0].ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('getGroups', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getGroups(variables.access_token).then(function(response){
  expect(response[0].ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Status API is used to get the status messages', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getStatuses(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Contact API is used to get contacts/friends/connections data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getContacts(variables.access_token).then(function(response){
  expect(response.Data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Video API is used to get videos data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getVideos(variables.access_token).then(function(response){
  expect(response.Data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Likes API is used to get likes data', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getLikes(variables.access_token).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  
  it('This API is used to update the status on the user’s wall.', function(done){
    this.timeout(5000);
    lrtest.socialLogin.postStatus(variables.access_token,variables.title,variables.url,variables.status,variables.imageurl,variables.caption,variables.description).then(function(response){
  expect(response.isPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Message API is used to post messages to the user’s contacts', function(done){
    this.timeout(5000);
    lrtest.socialLogin.postStatus(variables.access_token,variables.title,variables.url,variables.status,variables.imageurl,variables.caption,variables.description).then(function(response){
  expect(response.isPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Message API is used to post messages to the user’s contacts', function(done){
    this.timeout(5000);
    lrtest.socialLogin.postMessage(variables.access_token,variables.to,variables.subject,variables.message).then(function(response){
  expect(response.isPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Message', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getMessage(variables.access_token,variables.to,variables.subject,variables.message).then(function(response){
  expect(response.isPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('The Page API is used to get the page data from the user’s social account.', function(done){
    this.timeout(5000);
    lrtest.socialLogin.getPage(variables.access_token,variables.pagename).then(function(response){
  expect(response.ID).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

