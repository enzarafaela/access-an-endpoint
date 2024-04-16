const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simulação de um banco de dados de pedidos
const Aceito = 'Aceito';
const Preparando = 'Preparando';
const Transporte = 'Em Transporte';

const status = {
  Aceito,
  Preparando,
  Transporte,
};

const pedidos = {
  45800: Object.values(status)[0],
  45799: Object.values(status)[1],
  45798: Object.values(status)[2],
};

// Endpoint para obter o status de um pedido pelo ID
app.get('/status/:pedidoId', (req, res) => {
  // Extrai o ID do pedido da URL
  const pedidoId = req.params.pedidoId;

  // Verifica se o pedido existe no banco de dados
  if (pedidos[pedidoId]) {
    // Retorna o status do pedido
    res.json({ pedidoId, status: pedidos[pedidoId] });
  } else {
    // Retorna uma mensagem de erro se o pedido não for encontrado
    res.status(404).json({ mensagem: 'Pedido não encontrado' });
  }
});

// Endpoint para simular o envio de uma atualização de status para a squad de notificações
app.post('/atualizar-status', (req, res) => {
  // Extrai os dados da requisição
  const pedidoId = req.query.pedido;
  const novoStatus = req.query.status;

  if (!pedidoId || !pedidos[pedidoId]) {
    res.status(404).json({ erro: 'Pedido não encontrado' });
  } else if (!novoStatus) {
    res.status(400).json({ erro: 'Bad Request - Informe o novo Status' });
  } else if (!status[novoStatus]) {
    res.status(400).json({ erro: 'Bad Request - Informe um Status Válido' });
  } else {
    // Retorna uma resposta de sucesso
    res.json({
      mensagem: `Atualização de status '${novoStatus}' enviada com sucesso para o pedido '${pedidoId}'`,
    });
  }
});

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
