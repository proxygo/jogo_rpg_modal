function showModal(id) {
    document.getElementById('overlay').classList.add('active');
    document.getElementById(id).classList.add('active');
}

function hideModal(id) {
    document.getElementById(id).classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

document.getElementById('startButton').addEventListener('click', function() {
    showModal('modal1');
});

document.getElementById('choice1').addEventListener('click', function() {
    hideModal('modal1');
    showModal('modal2');
});

document.getElementById('choice2').addEventListener('click', function() {
    hideModal('modal1');
    showModal('modal3');
});

document.getElementById('choice3').addEventListener('click', function() {
    hideModal('modal2');
    showModal('endModal');
    document.getElementById('endModal').querySelector('p').textContent = 'Dentro da cabana, você encontra um mapa antigo e uma chave enferrujada. O mapa mostra um caminho secreto para um antigo templo. Você decidiu seguir o mapa e encontrou uma entrada secreta que leva a uma saída segura da floresta. Você encontrou a saída e voltou para casa com uma grande história para contar!';
});

document.getElementById('choice4').addEventListener('click', function() {
    hideModal('modal2');
    showModal('endModal');
    document.getElementById('endModal').querySelector('p').textContent = 'Você continua pela estrada e acaba se deparando com um grupo de bandidos. Eles exigem um tributo para deixá-lo passar. Você paga o tributo e pode continuar sua jornada, mas está sem recursos e se sente vulnerável. A estrada leva a um campo de visão aberto, mas a caminho de casa, você encontra uma caravana que o leva para um lugar seguro.';
});

document.getElementById('choice5').addEventListener('click', function() {
    hideModal('modal3');
    showModal('endModal');
    document.getElementById('endModal').querySelector('p').textContent = 'A ponte começa a balançar perigosamente enquanto você atravessa. Com muito cuidado, você consegue chegar ao outro lado, mas a ponte desaba logo depois. No lado oposto, você encontra um vilarejo que oferece ajuda e um caminho direto para casa.';
});

document.getElementById('choice6').addEventListener('click', function() {
    hideModal('modal3');
    showModal('endModal');
    document.getElementById('endModal').querySelector('p').textContent = 'O caminho ao redor do rio é longo e cansativo. Após várias horas, você chega a uma clareira onde encontra um grupo de viajantes. Eles oferecem comida e abrigo, e você pode se recuperar antes de continuar sua jornada para casa.';
});

document.getElementById('restartButton').addEventListener('click', function() {
    hideModal('endModal');
    showModal('modal1');
});

document.getElementById('exitButton').addEventListener('click', function() {
    window.close();
});

document.getElementById('overlay').addEventListener('click', function() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.getElementById('overlay').classList.remove('active');
});
