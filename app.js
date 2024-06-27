const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const fs = require('fs');
const ip = '3.228.116.177';

app.use(express.static(path.join(__dirname)));
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const conexion = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "registro",
    user: "erikson",
    password: "42011dias"
});


conexion.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');





// Endpoint para manejar el login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';

  conexion.query(query, [username], (err, results) => {
      if (err) {
          console.error('Error al consultar la base de datos:', err);
          res.status(500).json({ error: 'Error interno al intentar iniciar sesión' });
          return;
      }

      if (results.length === 0) {
          res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
          return;
      }

      const user = results[0];
      if (password !== user.password) {
          res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
          return;
      }

      // Si las credenciales son correctas, podrías establecer una sesión, generar un token JWT, etc.
      res.json({ message: 'Inicio de sesión exitoso', user: { id: user.id, username: user.username } });
  });
});


















});
app.post('/submit-form', (req, res) => {
  const { nombre, apellidos, dni, email, asunto, mensaje } = req.body;
  const query = 'INSERT INTO Contactos (nombre, apellidos, dni, email, asunto, mensaje) VALUES (?, ?, ?, ?, ?, ?)';
  
  conexion.query(query, [nombre, apellidos, dni, email, asunto, mensaje], (err, result) => {
      if (err) {
          console.error('Error al insertar en la base de datos:', err);
          res.status(500).send('Error interno al procesar el formulario');
          return;
      }
      
      console.log('Datos insertados correctamente en la base de datos');
      // Redireccionar al usuario a la página deseada
      res.redirect('/formulario.html');
  });
});


/*calendario*/

app.get("/", function(req, res) {
  console.log("Ruta inicial");
  res.send("Ruta inicial");
});
app.get("/api/dates/:current", (req, res) => {
  var request = req.params.current;
  console.log(`Received request for date: ${request}`);
  
  const query = "SELECT NAMECAL, DESCCAL AS DESCRIPTION, DATE_FORMAT(DATECAL, '%d/%m/%Y') AS DATECAL FROM calendario WHERE DATECAL = ?";

  conexion.query(query, [request], function(err, rows, _fields) {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (rows.length > 0) {
      console.log('Resultado de la BD:', JSON.stringify(rows[0]));
      res.json(rows[0]);
    } else {
      console.log('No data found for the requested date.');
      res.json(null);
    }
  });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '2', 'index.html'));
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://${ip}:${port}`);
});



