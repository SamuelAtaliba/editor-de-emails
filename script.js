function generateReport() {
  const arrivalTime = document.getElementById('arrival-time').value;
  const departureTime = document.getElementById('departure-time').value;
  const clientName = document.getElementById('client-name').value;
  const travelExpense = document.getElementById('travel-expense').value;
  const serviceDescription = document.getElementById('service-description').value;
  const requesterName = document.getElementById('requester-name').value;
  const osNumber = document.getElementById('os-number').value;
  const currentTime = document.getElementById('current-time').value;
  const reportDate = new Date(document.getElementById('report-date').value);
  const formattedDate = reportDate.toLocaleDateString('pt-BR');

  const emailBody = generateEmailBody(currentTime, arrivalTime, departureTime, clientName, travelExpense, serviceDescription, requesterName, osNumber, formattedDate);

  document.getElementById('report-output').innerText = emailBody;
  document.getElementById('copy-button').style.display = 'block';
}

function generateEmailBody(currentTime, arrivalTime, departureTime, clientName, travelExpense, serviceDescription, requesterName, osNumber, formattedDate) {
  let greeting;

  const hour = parseInt(currentTime.split(':')[0], 10);
  if (hour < 12) {
      greeting = "Bom dia";
  } else if (hour < 18) {
      greeting = "Boa tarde";
  } else {
      greeting = "Boa noite";
  }

  return `${greeting},

Segue abaixo o relatório do serviço realizado em ${formattedDate}:

Nome do Cliente: ${clientName}
Horário de Chegada: ${arrivalTime}
Horário de Saída: ${departureTime}
Gasto com Deslocamento: R$${travelExpense}
Descrição do Serviço:
${serviceDescription}

Solicitante: ${requesterName}
Número da OS: ${osNumber}

Atenciosamente,

[Seu Nome]`;
}

function copyToClipboard() {
  const reportOutput = document.getElementById('report-output');
  const range = document.createRange();
  range.selectNode(reportOutput);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('Relatório copiado para a área de transferência!');
}
