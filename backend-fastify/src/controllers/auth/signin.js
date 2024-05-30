import { fastify } from "../../index.js";
import { User } from "../../models/user.js";

export const signIn = async function (req, res) {
  const { email, password } = req.body; // Extraction de l'email et du mot de passe du corps de la requête.
  try {
    const foundUser = await User.findOne({ email: email.toLowerCase() }); // Recherche de l'utilisateur dans la base de données par email.
    if (!foundUser) {
      return res.status(404).send({
        statusCode: 404,
        error: "Internal Server Error",
        message: "Error: We can't find a user with that e-mail address.", // Renvoi d'une erreur si l'utilisateur n'est pas trouvé.
      });
    }
    const validPassword = await fastify.bcrypt.compare(
      password,
      foundUser.password // Comparaison du mot de passe fourni avec celui stocké dans la base de données.
    );
    if (!validPassword) {
      return res
        .status(400)
        .send({ message: "Error: Invalid password.", validPassword }); // Renvoi d'une erreur si le mot de passe est invalide.
    }
    const { user_id } = foundUser; // Extraction de l'identifiant utilisateur.
    const accessToken = fastify.jwt.sign({ id: user_id }); // Génération d'un token JWT pour l'utilisateur.

    return res.status(200).send({
      id: foundUser.id,
      user_id: foundUser.user_id,
      fullName: foundUser.fullName,
      email: foundUser.email,
      accessToken, // Renvoi des informations de l'utilisateur et du token JWT.
    });
  } catch (error) {
    return res.status(404).send({ message: "Error: Something went wrong." }); // Renvoi d'une erreur en cas de problème lors de la connexion.
  }
};