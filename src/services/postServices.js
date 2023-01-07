const likemeDB = require('../database/conexion')

const showPosts = async () => {
    const { rows } = await likemeDB.query("SELECT * FROM posts");
    console.log(rows)
    return rows;
}

const createPost = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)";
    const valores = [titulo, img, descripcion];
    const resultado = await likemeDB.query(consulta, valores);
    return (resultado);
};

const modifyPost = async (id, like) => {
    const consulta = `UPDATE posts SET like=$2 where id=$1`;
    const valores = [id, like];
    const resultado = await likemeDB.query(consulta, valores)
    return (resultado);

}

const removePost = async (id) => {
    const consulta = `delete from posts where id=$1`;
    const resultado = await likemeDB.query(consulta, [id])
    return (resultado);
}


module.exports = { showPosts, createPost, modifyPost, removePost }; 