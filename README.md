# Proyecto Test de JS

He creado un prototipo de test para programar en el cual puedes ver tu habilidad en JS con 3 simples ejercicios. Lo he creado porque tenía curiosidad de saber qué tan complicado era integrar un editor de código y determinar si el usuario cumplía con éxito el ejercicio pedido.

## Probar el proyecto

URL del proyecto desplegado en Vercel: [Test de JS](https://prueva-js.vercel.app/)

Clonar el proyecto:

```bash
# 1. Clonar proyecto
git clone https://github.com/Marcos-Antoni/prueva-js.git
# 2. Terminal
cd ./prueva-js
# 3. Instalar dependencias
npm install
```

Ya instaladas las dependencias solo queda crear tu propio .env:

```bash
# En el .env crea la siguiente variable junto con tu clave privada de OpenAi
OPENAI_KEY="Tu clave privada"
```

Y solo queda correr el comando npm run dev y tendrás el proyecto funcionando.

## Herramientas utilizadas

1. Nuxt.Js
2. TS
3. Codemirror
4. OpenAI
5. Talently

## Cómo funciona

Para crearlo, primero hice un boceto básico de cómo quería que funcionara y lo guardé en esta imagen:
![Estructura del Proyecto](https://prueva-js.vercel.app/IMG/Estructura_del_proyecto.png)

Este proyecto usa tanto front-end como back-end, esto es así porque necesitaba usar la API de OpenAI y al mismo tiempo dar un entorno agradable al usuario con un editor de código como Codemirror. Con esto, no solo logré resolver el problema, sino que además me dio la facilidad de integrar un crítico que puede leer su código y ayudar a mejorar tu código si lo haces mal y felicitar al usuario si lo cumple bien.

**Con todo lo que les he contado, les invito a probarlo y comentarme lo que opinan.**
