import database from "/infra/database.js";

async function status(request, response) {
    const result = await database.query("SELECT 1 + 1;");
    console.log(result);
    response.status(200).json({chave: "valor"});
}

export default {
    status,
};



/*
sdocument.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };

    // Aqui você pode adicionar a integração com o WhatsApp
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso!');
    this.reset();
});
*/
document.getElementById('whatsapp-btn').addEventListener('click', function() {
    const phoneNumber = "5513996103816"; // Substitua com o número real
    const message = "Olá! Gostaria de agendar uma consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

