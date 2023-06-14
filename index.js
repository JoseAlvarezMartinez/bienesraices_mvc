import express from "express"

// Crear la app
const app = express();

// Routing
app.get('/',(req,res) => {
    res.json({
        msg:"Hola mundo en express"
    })
})
app.get('/nosotros',(req,res) => {
    res.send('Info de nosotros  ')
})
// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});
