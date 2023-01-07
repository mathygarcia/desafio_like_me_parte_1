const { showPosts, createPost, modifyPost, removePost } = require('../services/postServices')

const controlador = {
    index: async (req, res) => {
        res.sendFile(__dirname, "index.html")
    },
    show: async (req, res) => {
        //obtenemos los posts
        const mostrarPosts = await showPosts();
        //imprimir en archivo json 
        res.json(mostrarPosts);
    },
    create: async (req, res) => {
        const { titulo, url, descripcion } = req.body;
        await createPost(titulo, url, descripcion);
        res.send("Posts agregado con éxito");
    },
    modify: async (req, res) => {
        const { id } = req.params;
        const { like } = req.body;
        await modifyPost(id, like);
        res.send("Post actualizado");
    },
    remove: async (req, res) => {
        const { id } = req.params;
        await removePost(id);
        res.send("Post eliminado");
    }
}

module.exports = controlador;