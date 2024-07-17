'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		userName: '',
		subject: '',
		userEmail: '',
		message: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');
			console.log(result.text);
			alert('Mensaje enviado exitosamente');
		} catch (error) {
			console.error('Error al enviar el mensaje:', error);
			alert('Error al enviar el mensaje');
		}
	};

	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
			<h2 className="text-2xl font-bold mb-6">Contacto</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
						Nombre Completo
					</label>
					<input
						type="text"
						name="userName"
						id="firstName"
						value={formData.userName}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
						Asunto
					</label>
					<input
						type="text"
						name="subject"
						id="subject"
						value={formData.subject}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
						Correo Electrónico
					</label>
					<input
						type="email"
						name="userEmail"
						id="email"
						value={formData.userEmail}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
						Descripción
					</label>
					<textarea
						name="message"
						id="message"
						value={formData.message}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						rows={5}
						required
					/>
				</div>
				<div className="mb-4">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
