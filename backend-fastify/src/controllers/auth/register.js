import { v4 as uuidv4 } from "uuid"; //fonction genere des identifiants uniques
import { fastify } from "../../index.js";
import { User } from "../../models/user.js";
import { isPasswordValid } from "../../utils/users.js";

/**
 * Registers a new user.
 * @async
 * @param {import('fastify').FastifyRequest} req - The Fastify request object.
 * @param {import('fastify').FastifyReply<Response>} res - The Fastify response object.
 * @returns {Promise<import('fastify').FastifyReply<Response>>} A promise that resolves to the Fastify response object.
 */
export const register = async function (req, res) {
  const { fullName, email, password } = req.body; // Extraction du nom complet, de l'email et du mot de passe du corps de la requête.
  if (fullName && email && password) { // Vérification que tous les champs requis sont présents.
    if(!isPasswordValid(password)) { // Validation du mot de passe.
      return res.status(400).send({ message: "Error: password is not valid" }) // Renvoi d'une erreur si le mot de passe n'est pas valide.
    }
    try {
      const hashedPassword = await fastify.bcrypt.hash(password); // Hachage du mot de passe.
      const newUser = new User({
        user_id: uuidv4(), // Génération d'un identifiant unique pour l'utilisateur.
        fullName,
        email: email.toLowerCase(), // Conversion de l'email en minuscules.
        password: hashedPassword, // Attribution du mot de passe haché.
      });
      const { user_id } = await newUser.save(); // Sauvegarde du nouvel utilisateur dans la base de données et extraction de l'identifiant utilisateur.
      const accessToken = fastify.jwt.sign({ id: newUser.user_id }); // Génération d'un token JWT pour l'utilisateur.
      return res
        .status(201)
        .send({ user_id, email: email.toLowerCase(), fullName, accessToken }); // Renvoi de la réponse avec l'identifiant utilisateur, l'email, le nom complet et le token JWT.
    } catch (error) {
      return res.send(error); // Renvoi de l'erreur en cas de problème lors de l'enregistrement de l'utilisateur.
    }
  }
  return res.status(400).send({ message: "Error: form is invalid" }); // Renvoi d'une erreur si le formulaire est invalide (champs manquants).
};
