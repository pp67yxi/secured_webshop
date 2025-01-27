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
};
