export interface Contrato{
    id_Contrato?: number,
    id_Personal: number,
    Funciones: string,
    Adscrito: string,
    Inicio: string,
    Termino: string,
    Sueldo:string,
    Sueldo_Escrito: string,
    Nombre_T1: string,
    Apellido_T1: string,
    Correo_T1: string,
    Telefono_T1: string,
    Nombre_T2: string,
    Apellido_T2: string,
    Correo_T2: string,
    Telefono_T2: string,
    Directora: string,
    Contraloria: string,
    Tesorero: string,
    Fecha_Creacion: string,
}

export interface VContrato{
    id_Contrato:number,
    id_Personal:number,
    Nombre_Personal:string,
    Apellido_Personal: string,
    Funciones: string,
    Inicio: string,
    Termino: string,
    Fecha_Creacion: string,
}


export interface ContratoE{
    Funciones: string,
    Adscrito: string,
    Inicio: string,
    Termino: string,
    Sueldo:string,
    Sueldo_Escrito: string,
    Nombre_T1: string,
    Apellido_T1: string,
    Correo_T1: string,
    Telefono_T1: string,
    Nombre_T2: string,
    Apellido_T2: string,
    Correo_T2: string,
    Telefono_T2: string,
    Directora: string,
    Contraloria: string,
    Tesorero: string,
    Fecha_Creacion: string,
}


export interface Administracion{
    Nombre: string,
    Apellido: string,
    Correo: String,
}

export interface AdministracionData{
    Nombre: string,
    Apellido: string,
    Correo: String,
    Puesto: String
}


export interface InformacionContratos{
    Nombre_Personal?: string,
    Apellido_Persona?: string,
    Nacionalidad?: string,
    RFC?: string,
    CURP?: string,
    CP?: string,
    Calle?: string,
    Colonia?: string,
    NumeroIn?:string,
    NumeroEx?: string,
    Estado?: string,
    Municipio?: string,
    Funciones: string,
    Adscrito: string,
    Inicio: string,
    Termino: string,
    Sueldo:string,
    Sueldo_Escrito: string,
    Fecha_Creacion: string,
    Nombre_T1: string,
    Apellido_T1: string,
    Nombre_T2: string,
    Apellido_T2: string,
    Directora: string,
    Contraloria: string,
    Tesorero: string,
}