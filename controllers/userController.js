const user = require("../Database/User");

module.exports.saveUser = (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  user.register(
    new user({ firstname, lastname, username }),
    password,
    (err, newUser) => {
      if (err) {
        if (err.name === "UserExistsError") {
          return res.render("Signup", { error: "User already exists" });
        }
        return res.render("Signup", { error: "An error occurred during signup" });
      }
      res.redirect("/Signin");
    }
  );
};
