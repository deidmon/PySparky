// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PySparky',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
 sidebar: [
   {
	 label: 'Primeros Pasos',
	 	 items: [
	   { label: 'Introducción a PySpark', slug: 'guides/introduccion' },
	   { label: 'Configuración e instalación', slug: 'guides/instalacion' },
	 ],
   },
   {
	 label: 'Conceptos Fundamentales',
	 items: [
	   { label: 'Fundamentos de PySpark', slug: 'guides/fundamentos' },
	   { label: 'Transformaciones básicas', slug: 'guides/transformaciones' },
	   { label: 'Tipos de datos y manejo de valores nulos', slug: 'guides/tipos-datos-nulos' },
	],
   },
   {
	 label: 'Funciones Avanzadas',
	 items: [
	   { label: 'Funciones SQL integradas', slug: 'guides/funciones-sql' },
	   { label: 'Funciones de ventana', slug: 'guides/window-functions' },
	   { label: 'UDFs y funciones personalizadas', slug: 'guides/udfs' },
	 ],
   },
   {
	 label: 'Manejo de Datos',
	 items: [
	   { label: 'Lectura y escritura de datos', slug: 'guides/lectura-escritura' },
	   { label: 'Manejo de particiones', slug: 'guides/particiones' },
	   { label: 'Persistencia y optimización', slug: 'guides/persistencia-optimizacion' },
	   
	 ],
   },
   {
	 label: 'Avanzado',
	 items: [
		{ label: 'Spark SQL', slug: 'guides/spark-sql' },
	   { label: 'Manejo de errores y logs', slug: 'guides/errores-logs' },
	   { label: 'Testing y buenas prácticas', slug: 'guides/testing-buenas-practicas' },
	   { label: 'Casos de uso avanzados', slug: 'guides/casos-avanzados' },]},
 ],
		}),
	],
});
