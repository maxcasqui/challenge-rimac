# 🩺 Reto Técnico - Rimac Insurance App

## 📱 Demo
[🎬 Ver video del demo](https://drive.google.com/file/d/1KSFM4Z1IP7d2C1FIlxuVSjwpdHUqSBkL/view?usp=sharing)

## 🚀 Tecnologías
- React Native (Expo)
- React Navigation
- TypeScript
- Styled Components
- Axios
- Context API

## 🧠 Estructura general
- **Pantalla 1:** Validación del usuario.
- **Pantalla 2:** Selección de plan.
- **Pantalla 3:** Resumen del seguro.

## ⚙️ Lógica
- Se calcula la edad del usuario con `date-fns`.
- Los planes se filtran según la edad.
- Si el usuario elige “Para alguien más”, se aplica un 5% de descuento.
- El plan elegido se guarda en el contexto global.

## 💾 Instalación
```bash
npm install --legacy-peer-deps
npx expo start
