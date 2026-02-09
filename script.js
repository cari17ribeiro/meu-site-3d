// Substitua pelo seu número real do WhatsApp (DDI + DDD + Número)
const MEU_WHATSAPP = "5511999999999"; 

// Função que preenche o formulário quando o cliente clica num modelo pronto
function setModelo(nome, link) {
    const textarea = document.getElementById('info');
    const select = document.getElementById('tipo');
    
    select.value = "Thingiverse";
    textarea.value = `Gostaria de um orçamento para o modelo:\n👉 ${nome}\nLink: ${link}`;
    
    // Rola para a seção da ideia
    document.getElementById('ideia').scrollIntoView({ behavior: 'smooth' });
}

// Função que formata e envia a mensagem para o WhatsApp
function enviar() {
    const tipo = document.getElementById('tipo').value;
    const info = document.getElementById('info').value;

    if (!info.trim()) {
        alert("Por favor, preencha os detalhes da sua ideia ou link!");
        return;
    }

    const mensagem = `*NOVO PEDIDO NOLLIES 3D*\n\n` +
                     `*Tipo:* ${tipo}\n` +
                     `*Detalhes:* ${info}`;

    const url = `https://wa.me/${MEU_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}
