
/*
* GET home page.
*/

//To load LoginRadius module
var lr = require('LoginRadius');

//Set LoginRadius Api Secret
var secret = '0e59f675-8752-43f2-b45f-722038cde7a8';

exports.index = function (req, res) {
    res.render('index', { title: 'LoginRadius NodeJs SDK Demo', data: '' });
};


//callback returns complete asynchronous user data
exports.callback = function (req, res) {
    if (req.body.token != undefined && req.body.token != '') {
        //To get access token
        lr.getAccessToken(req.body.token, secret, function (accesstoken) {
            //To get user profile data
            lr.getUserprofile(accesstoken.access_token, function (userprofile) {
                //To get user contacts
                lr.getContacts(accesstoken.access_token,0, function (contacts) {
                    //To get user albums
                    lr.getAlbums(accesstoken.access_token, function (albums) {
                        //To get user photo
                      lr.getPhotos(accesstoken.access_token,"180868784", function (photos) {
                        //To get user check-ins
                         lr.getCheckins(accesstoken.access_token, function (checkins) {
                            //To get user audios
                            lr.getAudios(accesstoken.access_token, function (audios) {
                                //To get user mentions
                                lr.getMentions(accesstoken.access_token, function (mentions) {
                                    //To get user followings
                                    lr.getFollowings(accesstoken.access_token, function (followings) {
                                        //To get user events
                                        lr.getEvents(accesstoken.access_token, function (events) {
                                            //To get user posts
                                            lr.getPosts(accesstoken.access_token, function (posts) {
                                                lr.getCompanies(accesstoken.access_token, function (companies) {
                                                    //To get user groups
                                                    lr.getGroups(accesstoken.access_token, function (groups) {
                                                        //To get user statuses
                                                        lr.getStatuses(accesstoken.access_token, function (statuses) {
                                                            //To get user videos
                                                            lr.getVideos(accesstoken.access_token, function (videos) {
                                                                //To get user likes
                                                                lr.getLikes(accesstoken.access_token, function (likes) {
                                                                    //To post status on facebook, twitter and linkedin
                                                                    lr.postStatus(accesstoken.access_token, "", "", "I'm life Enjoying", "", "", "", function (poststatus) {
                                                                        //To send direct message on twitter and linkedin
                                                                        lr.postMessage(accesstoken.access_token, "1652632832", "Hello", "How r U?", function (postmessage) {                                                                            
                                                                            res.render('index', {
                                                                                title: 'Welcome to User Profile Data',
                                                                               data: {
                                                                                    token: accesstoken,
                                                                                    isposted: poststatus.isPosted == true ? "successfully posted!!" : "Not posted!!",
                                                                                    issent: postmessage.isPosted == true ? "successfully sent!!" : "Not sent!!",
                                                                                    userprofile: userprofile,
                                                                                    contacts: contacts,
                                                                                    albums: albums,
                                                                                    photos: photos,
                                                                                    checkins: checkins,
                                                                                    audios: audios,
                                                                                    mentions: mentions,
                                                                                    followings: followings,
                                                                                    events: events,
                                                                                    posts: posts,
                                                                                    companies: companies,
                                                                                    groups: groups,
                                                                                    statuses: statuses,
                                                                                    videos: videos,
                                                                                    likes: likes
                                                                               }
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                              });
                                           });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });

            });
        });
    }
};