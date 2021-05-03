const jwt = require("jsonwebtoken");


const generarJWT = (uid) => {
  return new Promise((resolve, reject) => {

        // Lo que se va agrabar en el payload
        const payload = {uid};

        jwt.sign(payload,process.env.JWT_KEY, {
            expiresIn:'24h',
        }, (err, token) => {
            if(err){
                // No se pudo crear el token
                reject('No se puede generar el JWT');
            }else{
                // Token
                resolve(token);
            }
        });
  });
};

module.exports = {
  generarJWT,
};
