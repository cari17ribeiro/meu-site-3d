// Função para mostrar/esconder campo de link
function toggleInputs() {
    const origem = document.getElementById('origem').value;
    const groupLink = document.getElementById('group-link');
    
    if (origem === 'thingiverse') {
        groupLink.style.display = 'block';
    } else {
        groupLink.style.display = 'none';
        document.getElementById('linkModel').value = '';
    }
}

// Função que preenche o form ao clicar num modelo da vitrine
function selecionarModelo(nome, link) {
    document.getElementById('origem').value = 'thingiverse';
    toggleInputs();
    
    document.getElementById('linkModel').value = link;
    document.getElementById('obs').value = `Olá! Gostaria de um orçamento para o modelo: ${nome}`;
    
    // Rola suavemente até o formulário
    document.getElementById('orcamento').scrollIntoView({ behavior: 'smooth' });
}

// Função para disparar o WhatsApp
function enviarWhatsApp() {
    const meuNumero = "5511999999999"; // <--- COLOQUE SEU NÚMERO AQUI
    
    const origem = document.getElementById('origem').value;
    const link = document.getElementById('linkModel').value;
    const material = document.getElementById('material').value;
    const obs = document.getElementById('obs').value;

    let mensagem = `*SOLICITAÇÃO DE ORÇAMENTO 3D*\n\n`;
    mensagem += `*Origem:* ${origem === 'thingiverse' ? 'Link Externo' : 'Arquivo Próprio'}\n`;
    
    if (link) {
        mensagem += `*Link do Projeto:* ${link}\n`;
    }
    
    mensagem += `*Material:* ${material}\n`;
    
    if (obs) {
        mensagem += `*Observações:* ${obs}\n`;
    }

    const url = `https://wa.me/${meuNumero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}
