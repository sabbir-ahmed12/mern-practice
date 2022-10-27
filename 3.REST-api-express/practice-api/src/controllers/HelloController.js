exports.Hello = (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "This is my first express REST API." });
};
