# Frontend Challenge - Amalgama

## Ejercicio 1 - Componentes

- Primero que nada utilizaria propsType o typescript para la validacion de las props
- Segundo el parseo de la data lo haria en el renderizado para evitarme un doble mapeo innecesario de la data
- Agregaria una validacion para contacts en caso de que no existiera y usaria la validacion ? En cada una de las propiedades por si llegara a ser nulo dicho valor ya que podria romerme al renderizar
- La primer etiqueta que se renderiza es un div y por lo que entiendo es una screen nueva por lo que usaria la etiqueta <main> lo cual ayuda a la accesibilidad de los sistemas para la gente con alguna discapacidad visual
- Crearia un nuevo componente <NavBar/> y lo abstraeria de esta screen a para importarlo una sola vez y no en cada screen
- Usaria las etiquetas <Link/> de React para navegar dentro de mi aplicacion ya que se recomienda utilizar las etiquetas <a> para navegar a sitios externos
- Usaria una validacion al estilo no data to show o loading si contacts llegara vacio
- Falta la key en el map lo que ademas de marcarse un error en consola podria llegar a ocacionar otro tipo de errores no esperados
- Falta la etiqueta alt de texto alternativo en la imagen y pondria una imagen de default en caso de no existir
- Depende la estrategia de muestreo de datos a utilizar defaultearia los valores en caso de llegar nulos con un - o directamente no mostraria el label por ejemplo Phone: {contact?.numero ?? '-'} si no existe el numbero
- Validaria si addresses contiene algo caso contrario mostraria un mensaje al estilo no addreses to show
- Falta la key en el map de addresses
- Crearia una carpeta con utils para las funciones truncate y crearia una funcion pluralize para el label de addresses
- Agregaria un link al emailto para que si clikeo el mail me active la posibilidad de mandar un mail directamente y lo mismo con el telefono

## Ejercicio 2 - Estado

La forma mas optima en mi opinion para e guardar esta información en el estado local seria con la libreria zustand aunque podriamos usar redux. Por lo que crearia dos stores diferenciadas por entidad. Una para almacenar los books y otra para los usuarios. De esta manera puedo almacenar toda la data respectiva de los books en su store y de los usuarios en la otra pero con la diferencia de que en el array favorites_books solamente guardo la referencia (id) al libro en cuestion, ahorrando espacio en memoria, haciendolo mas escalable y dando la posibilidad con este id unico de buscar en la store de books los libros que necesito via su id por ejemplo con un books.find(x => x.id === bookId)

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUsersStore = create(
persist(
(set, get) => ({
users: [],
addFavoritesBooks: (bookId: number) => {
const { users } = get()
set({ users: {favorite_books: [... users.favorite_books, bookId ]} })
},
}),
{
name: 'users',
},
),
)

export const useBooksStore = create(
persist(
(set, get) => ({
books: [],
}),
{
name: 'books',
},
),
)

** ADJUNTO JSON EN api/data/store.json **

************************************************
Demore un poco mas de 2 horas porque mockee algo de data, agregue eslint, y queria hacer los hooks pero no queria excederme mucho mas del tiempo permitido.
Si hubiera tenido mas tiempo hubiera tipado mejor algunas funciones.
Habria agregado estilos y hecho responsive. Ademas de haber creado un theme para poder manejar los mismos estilos a lo largo de la aplicacion con constantes.
Hubiera creado las stores detalladas en el punto dos y mostrado en la practica lo desarrollado en el README (empece escribiendo el paso 2 y luego haciendo el paso 3 lo pense pero falta de tiempo). De haberlo hecho hubiera creado al lado de cada usuario un boton con un mas para agregar un libro favorito por medio del id y luego mostrarlos usando el hook de useBooks(id)
Hubiera agregado en el navbar si estaba loggueado un avatar y si clickeabas este que saliera un tooltip clickeable que diga Loggout, creado la funcion que elimite el token de la sesion y redireccione a la pagina de login.
Habria creado en vez del Auth provider uno llamado privateRoute para encerrar las rutas solo accesibles si esta logeado el usuario sacando ese if del que no estoy muy feliz 
