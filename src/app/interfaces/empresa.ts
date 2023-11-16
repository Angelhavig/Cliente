export interface Empresa{
    id?: number,
    Titulo_Empresa: string,
    Descripcion_Empresa: string,
    Contacto_Empresa?: string,
    Correo_Empresa?: string,
    Pais_Empresa?: string,
    Sector_Empresa?: string,
}

export interface Comentario_Empresa{
    id: number,
    id_empresa: number,
    Titulo_Comentario: string,
    Contenido_Comentario: string,
    Contacto: string,
    Contacto_Info?: string,
    Fecha: string,
}

export interface postComentario_Empresa{
    id?: number,
    id_empresa: number,
    Titulo_Comentario: string,
    Contenido_Comentario: string,
    Contacto?: string,
    Contacto_Info?: string,
    Fecha: string,
}
