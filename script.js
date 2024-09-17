// script.js
function showModal(id) {  
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(id).style.display = 'block';
}

function hideModal(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Início do jogo
document.getElementById('startButton').addEventListener('click', function() {
    showModal('modal1');
});

// Modal 1 opções
document.getElementById('choice1').addEventListener('click', function() {
    hideModal('modal1');
    showModal('modal2');
});

document.getElementById('choice2').addEventListener('click', function() {
    hideModal('modal1');
    showModal('modal3');
});

// Modal 2 opções
document.getElementById('choice3').addEventListener('click', function() {
    hideModal('modal2');
    document.getElementById('endText').textContent = 'Dentro da cabana, você encontra um mapa antigo e uma chave enferrujada. O mapa mostra um caminho secreto para um antigo templo. Você decidiu seguir o mapa e encontrou uma entrada secreta que leva a uma saída segura da floresta. Você encontrou a saída e voltou para casa com uma grande história para contar!';
    showModal('endModal');
});

document.getElementById('choice4').addEventListener('click', function() {
    hideModal('modal2');
    document.getElementById('endText').textContent = 'Você continua pela estrada e acaba se deparando com um grupo de bandidos. Eles exigem um tributo para deixá-lo passar. Você paga o tributo e pode continuar sua jornada, mas está sem recursos e se sente vulnerável. A estrada leva a um campo de visão aberto, mas a caminho de casa, você encontra uma caravana que o leva para um lugar seguro.';
    showModal('endModal');
});

// Modal 3 opções
document.getElementById('choice5').addEventListener('click', function() {
    hideModal('modal3');
    document.getElementById('endText').textContent = 'A ponte começa a balançar perigosamente enquanto você atravessa. Com muito cuidado, você consegue chegar ao outro lado, mas a ponte desaba logo depois. No lado oposto, você encontra um vilarejo que oferece ajuda e um caminho direto para casa.';
    showModal('endModal');
});

document.getElementById('choice6').addEventListener('click', function() {
    hideModal('modal3');
    document.getElementById('endText').textContent = 'O caminho ao redor do rio é longo e cansativo. Finalmente, você chega a um ponto de vista de onde vê a saída da floresta. Você consegue voltar para casa, mas sua jornada foi mais longa do que esperava. No final, você está aliviado por ter encontrado o caminho de volta.';
    showModal('endModal');
});

// Botões do modal final
document.getElementById('restartButton').addEventListener('click', function() {
    hideModal('endModal');
    showModal('modal1');
});

document.getElementById('exitButton').addEventListener('click', function() {
    hideModal('endModal');
    alert('Obrigado por jogar!');
});

// Função para fechar o modal ao clicar no "x"
function addCloseEventToModals() {
    const closeButtons = document.querySelectorAll('.modal .close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            hideModal(modal.id);
        });
    });
}

// Adicione o evento de fechar aos modais
document.addEventListener('DOMContentLoaded', function() {
    addCloseEventToModals();
});
