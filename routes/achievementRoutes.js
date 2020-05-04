
const controller = require('../app/controller/Achievement_Management/achievement')

module.exports = (app) => {
    const path = '/api/achievement';

    app.post(path+'/create/',controller.create);
    app.put(path+'/update/',controller.update);
    app.delete(path+'/delete/',controller.delete);
    
}