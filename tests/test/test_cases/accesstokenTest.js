var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

  // it('exchange access token', function(done){
  //   this.timeout(5000);
  //   lrtest.accessToken.exchange(variables.access_token).then(function(response){
  //     console.log(response);
  // expect(response.access_token).to.exist;
  // done();
  // }).catch(function(error){
  //    console.log(error);
  // })
  // });

  // it('validate access token', function(done){
  //   this.timeout(5000);
  //   lrtest.accessToken.validity(variables.access_token).then(function(response){
  //     console.log(response);
  // expect(response.access_token).to.exist;
  // done();
  // }).catch(function(error){
  //    console.log(error);
  // })
  // });


  // it('invalidate access token', function(done){
  //   this.timeout(5000);
  //   lrtest.accessToken.invalidate(variables.access_token).then(function(response){
  //     console.log(response);
  // expect(response.isPosted).to.exist;
  // done();
  // }).catch(function(error){
  //    console.log(error);
  // })
  // });


  it('refresh access token', function(done){
    this.timeout(5000);
    lrtest.accessToken.refresh(variables.access_token).then(function(response){
      console.log(response);
  expect(response.access_token).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get active Session by token', function(done){
    this.timeout(5000);
    lrtest.accessToken.activeSession.getByToken(variables.access_token).then(function(response){
   console.log(response.data[0].AccessToken);
  expect(response.data[0].AccessToken).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get active Session by Uid', function(done){
    this.timeout(5000);
    lrtest.accessToken.activeSession.getByUid(variables.uid).then(function(response){
   console.log(response.data[0].AccessToken);
  expect(response.data[0].AccessToken).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Facebook Token', function(done){
    this.timeout(5000);
    lrtest.accessToken.getFacebookToken(variables.facebook_token).then(function(response){
   console.log(response);
  expect(response.access_token).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });
  

  it('Get Twitter Token', function(done){
    this.timeout(5000);
    lrtest.accessToken.getTwitterToken(variables.twitter_access_token, variables.twitter_token_secret).then(function(response){
   console.log(response);
  expect(response.access_token).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Get Trackable status', function(done){
    this.timeout(5000);
    lrtest.accessToken.getTrackableStatusStats(variables.access_token, variables.status).then(function(response){
   console.log(response);
  expect(response.Id).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Get Refersh User Profile', function(done){
    this.timeout(5000);
    lrtest.accessToken.getRefreshUserProfile(variables.access_token).then(function(response){
   console.log(response);
  expect(response.Provider).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });



  it('Get Short URL', function(done){
    this.timeout(5000);
    lrtest.accessToken.shortURL(variables.url).then(function(response){
   console.log(response);
  expect(response.ShortUrl).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Trackable status fetching', function(done){
    this.timeout(5000);
    lrtest.accessToken.trackableStatusFetching(variables.postid).then(function(response){
   console.log(response);
  expect(response.Id).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Trackable status posting', function(done){
    this.timeout(5000);
    lrtest.accessToken.trackableStatusPosting(variables.access_token, variables.status).then(function(response){
   console.log(response);
  expect(response.Id).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });