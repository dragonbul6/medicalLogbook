const Post = require('../app/controller/Posting_Management/post');
const Comment = require('../app/controller/Posting_Management/comment');

//middleware
const middleware = require('../helper/middleware/post');
const helper = require('../helper/middleware/checkAuth')

module.exports = (app) => {
    const path = '/api/post/';
    const pathComments = '/api/comment/';

        //Post Routes;
    app.post(path+"create",helper.verifyToken,Post.create,middleware.pushNotify);
    app.get(path+"all",Post.getall);
    app.get(path+"",Post.getSpecific);
    app.put(path+"update/",helper.verifyToken,Post.update);
    app.delete(path+"delete/",helper.verifyToken,Post.delete);
    app.put(path+"approval/",Post.approval);

        //Comments Routes;
    app.post(pathComments+"create",helper.verifyToken,Comment.create);
    app.put(pathComments+"update/",helper.verifyToken,Comment.update);
    app.delete(pathComments+"delete/",helper.verifyToken,Comment.delete);

    
    
}