module.exports = {
  get: (req, res) => {
    res.sendFile("/public/views/user.html", { root: "." });
  },
  login: (req, res) => {
    res.sendFile("/public/views/login.html", { root: "." });
  },
  register: (req, res) => {
    res.sendFile("/public/views/register.html", { root: "." });
  },
  post: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(
      `----------\nusername: ${username}\npassword: ${password}\n----------`
    );

    res.sendFile("/public/views/user.html", { root: "." });
  },
};
