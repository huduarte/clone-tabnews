function status(req, response) {
  response.status(200).json({ chave: "valor" });
}

export default status;
