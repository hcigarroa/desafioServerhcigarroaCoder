function enviarPedidoPorEmailYWhatsapp(productos, usuario) {
    // Configurar cliente de SendGrid
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
    // Configurar cliente de Twilio
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
  
    // Construir el cuerpo del correo electrónico
    const correoElectronico = {
      to: 'administrador@tudominio.com',
      from: 'noreply@tudominio.com',
      subject: `Nuevo pedido de ${usuario.nombre} (${usuario.email})`,
      html: `<p>Productos:</p><ul>${productos.map(p => `<li>${p}</li>`).join('')}</ul>`
    };
  
    // Enviar correo electrónico
    sgMail.send(correoElectronico);
  
    // Construir el mensaje de WhatsApp
    const mensajeWhatsapp = `Nuevo pedido de ${usuario.nombre} (${usuario.email}): Productos: ${productos.join(', ')}`;
  
    // Enviar mensaje de WhatsApp
    client.messages
      .create({
        body: mensajeWhatsapp,
        from: 'whatsapp:+14155238886', // Número de teléfono de Twilio para enviar mensajes de WhatsApp
        to: `whatsapp:${ADMIN_PHONE_NUMBER}`
      })
      .then(message => console.log(message.sid));
  
    // Enviar mensaje de texto al usuario
    client.messages
      .create({
        body: `Su pedido ha sido recibido y se encuentra en proceso. Gracias por su compra.`,
        from: '+1234567890', // Número de teléfono del administrador
        to: `+${usuario.numeroTelefono}`
      })
      .then(message => console.log(message.sid));
  }
  