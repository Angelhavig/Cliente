export interface Blogs{
    id?: number,
    Titulo_Blog: string,
    Subtitulo_Blog: string,
    Contenido_Blog: string,
    Fecha_Blog?: string
}

export interface Comentarios_Blogs{
    id?: number,
    id_blog: number,
    Titulo_Comentario: string,
    Contenido_Comentario: string,
    Fecha: string
}


export interface postComentarios_Blogs{
    id?: number,
    id_blog: number,
    Titulo_Comentario: string,
    Contenido_Comentario: string,
    Fecha: string
}
