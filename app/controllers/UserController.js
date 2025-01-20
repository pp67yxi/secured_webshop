module.exports = {
    get: (req, res) => {
        res.send("User: Sarah Test");
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname+'/public/views/login.html'));
    },
    register: (req, res) => {
        
    }
};