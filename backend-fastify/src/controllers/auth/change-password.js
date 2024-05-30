import { fastify } from "../../index.js";
import { User } from "../../models/user.js";
import {authBearerToken} from "../../utils/requests.js";
import {isPasswordValid, userIdToken} from "../../utils/users.js";

export const changePassword = async function (req, res) {
  const { passwordCurrent, passwordNew } = req.body; // Extraction des mots de passe actuel et nouveau depuis le corps de la requête.
  if (!passwordCurrent) return res.status(400).send({ message: "Error: form is invalid, current password is missing" }); // Vérification de la présence du mot de passe actuel.
  else if (!passwordNew) return res.status(400).send({ message: "Error: form is invalid, new password is missing" }); // Vérification de la présence du nouveau mot de passe.
  else if (passwordCurrent === passwordNew) return res.status(400).send({
    message: "Error: new password cannot be the same as your current password. Please choose a different password" // Vérification que le nouveau mot de passe est différent de l'actuel.
  });

  const token = authBearerToken(req); // Récupération du token Bearer à partir de la requête.
  const user_id = userIdToken(token); // Extraction de l'ID utilisateur à partir du token.

  try {
    const foundUser = await User.findOne({ user_id }); // Recherche de l'utilisateur dans la base de données à partir de son ID.
    if (!foundUser) {
      return res.status(404).send({
        statusCode: 404,
        message: "Error: We can't find the user.", // Renvoi d'une erreur si l'utilisateur n'est pas trouvé.
      });
    }

    const validPasswordCurrent = await fastify.bcrypt.compare(passwordCurrent, foundUser.password); // Vérification que le mot de passe actuel est correct.
    if (!validPasswordCurrent) {
      return res.status(400).send({ message: "Error: Current password is not valid." }); // Renvoi d'une erreur si le mot de passe actuel est incorrect.
    }

    if (!isPasswordValid(passwordNew)) {
      return res.status(400).send({ message: "Error: New password is not valid." }); // Vérification que le nouveau mot de passe respecte les critères de validation.
    }

    const hashedPassword = await fastify.bcrypt.hash(passwordNew); // Hachage du nouveau mot de passe.
    foundUser.password = hashedPassword; // Mise à jour du mot de passe de l'utilisateur dans la base de données.
    await foundUser.save(); // Sauvegarde de l'utilisateur mis à jour dans la base de données.

    return res.status(200).send({}); // Renvoi d'une réponse de succès.
  } catch (error) {
    return res.status(400).send({ message: "Error: Something went wrong." }); // Renvoi d'une erreur en cas de problème lors du processus.
  }
};
