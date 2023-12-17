import express, { Request, Response, NextFunction, Express } from 'express';
import { connectToMongoDB } from '../database/mongo/dbConnection';

// Crear una aplicación express
const app: Express = express();

// Inicializar la conexión a la base de datos
connectToMongoDB().then(() => {
  console.log('Conectado a MongoDB exitosamente');
}).catch(err => {
  console.error('Error al conectar con MongoDB', err);
});

// Definir rutas
app.get('/', (req: Request, res: Response) => {
  res.send('live from NY falpa mucha');
});

// Manejo de errores de conexión a la base de datos
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Iniciar el servidor
// const port: string | number = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0', () => {
  console.log(`Server is running on port 3000`);
});
