# clon_google_API_OpenAI
# Clon de Google con OpenAI

Este proyecto es una réplica simple de la página principal del buscador de Google, con la funcionalidad adicional de utilizar la API de OpenAI para generar respuestas basadas en el texto ingresado en el cuadro de búsqueda.

## Características

- Diseño similar al buscador de Google
- Integración con la API de OpenAI para generar respuestas a las consultas
- Muestra los resultados generados en un contenedor en la página

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Express
- OpenAI API

## Requisitos

- Node.js
- API key de OpenAI

## Instalación y configuración

1. Clona este repositorio en tu máquina local.

git clone https://github.com/tu_usuario/repositorio_clon_google.git

css
Copy code

2. Navega al directorio del proyecto e instala las dependencias.

cd repositorio_clon_google
npm install

css
Copy code

3. Crea un archivo `.env` en la raíz del proyecto y añade tu API key de OpenAI.

API_KEY=tu_api_key_de_openai

markdown
Copy code

4. Inicia el servidor.

npm start

markdown
Copy code

5. Abre tu navegador y visita `http://localhost:3000` para acceder a la aplicación.

## Uso

1. Ingresa tu consulta en el cuadro de búsqueda y haz clic en el botón "Buscar con Google".
2. La aplicación realizará una consulta a la API de OpenAI y generará una respuesta basada en el texto ingresado.
3. La respuesta generada se mostrará en un contenedor en la página.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.