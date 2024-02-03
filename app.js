import express from 'express';
import router from './src/routes/mainRoutes.js';

/*import path  from 'path';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL(".",import.meta.url)); 
*/
const app = express();

//Habilitar Pug

app.set("views","./src/views");
app.set('view engine','pug');

app.use('/',router);
const port = 3000;
app.listen(port, ()=>{

    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
