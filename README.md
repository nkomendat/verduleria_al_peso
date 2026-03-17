# 🥬 Verdulería al Peso

Aplicación web de e-commerce desarrollada en React que simula una verdulería online, permitiendo navegar productos, agregarlos al carrito, realizar compras y consultar órdenes guardadas en Firebase.

## 🌐 Demo en vivo

👉 https://verduleria-al-peso.vercel.app/

## 💻 Repositorio

👉 https://github.com/nkomendat/verduleria_al_peso

---

## 🧾 Descripción

Verdulería al Peso es una aplicación que permite a los usuarios:

- Explorar productos por categorías
- Ver el detalle de cada producto
- Agregar productos al carrito (por unidad o peso)
- Realizar una compra con formulario validado
- Generar una orden en Firebase
- Consultar órdenes por ID
- Cancelar una orden y recomponer stock

---

## 🚀 Funcionalidades principales

### 🛒 Catálogo de productos
- Listado dinámico desde Firebase
- Filtrado por categorías
- Navegación con React Router

### 🔍 Detalle de producto
- Información completa
- Selector de cantidad (unidad o kg)
- Control de stock

### 🧺 Carrito
- Visualización de productos agregados
- Cálculo de total
- Eliminación de productos
- Vaciar carrito

### 🧾 Checkout
- Formulario con validaciones:
  - Nombre
  - Teléfono (solo números)
  - Email y confirmación
- Generación de orden en Firebase
- Spinner durante el proceso
- ID de orden generado

### 📦 Órdenes
- Consulta de orden por ID
- Visualización de:
  - Datos del comprador
  - Productos
  - Imágenes
  - Fecha
  - Total

### 🔄 Cancelación de orden
- Botón de arrepentimiento
- Confirmación mediante modal
- Reposición automática de stock
- Cambio de estado de orden (`activa` → `cancelada`)

---

## 🛠️ Tecnologías utilizadas

- ⚛️ React
- 🔀 React Router DOM
- 🔥 Firebase (Firestore)
- 🎨 Bootstrap
- ⭐ React Icons
- 🚀 Vercel (deploy)

---

## 🧠 Manejo de estado

Se utiliza **Context API** (`CartContext`) para:

- Manejar el carrito globalmente
- Agregar productos
- Eliminar productos
- Calcular totales
- Contar ítems

---

## 🔥 Firebase

Se utilizan dos colecciones principales:

### 📦 `productos`
Contiene:
- name
- price
- stock
- category
- img
- tipo (unidad / peso)

### 🧾 `orders`
Contiene:
- buyer (nombre, teléfono, email)
- items (snapshot de productos)
- total
- date
- status (`activa` / `cancelada`)
- canceledAt (opcional)

---

## 🔄 Flujo de compra

1. Usuario navega productos
2. Agrega al carrito
3. Completa formulario en checkout
4. Se genera la orden en Firebase
5. Se descuenta stock
6. Se muestra ID de compra
7. Puede consultar la orden
8. Puede cancelarla (reponiendo stock)

---

## 📦 Instalación local

```bash
git clone https://github.com/nkomendat/verduleria_al_peso.git
cd verduleria_al_peso
npm install
npm run dev