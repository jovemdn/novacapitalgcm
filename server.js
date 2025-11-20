// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Node <18 precisa do node-fetch
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // pasta do HTML

// Substitua pelo seu webhook do Discord
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1439451133167927397/7owiU69Egepo89qEnYy0fJo0REofL8PabT6KFH7Q2_pZ2fgPc9if7sip6g1jUCg-rmv7';

// Endpoint para receber formulário
app.post('/enviar', async (req, res) => {
  try {
    const data = req.body;

    const content = `
**Nova inscrição recebida:**
Nome: ${data.nome}
CPF: ${data.cpf}
Sexo: ${data.sexo}
Estado Civil: ${data.civil}
Telefone: ${data.telefone}
Email: ${data.email}
Idade: ${data.idade}
Discord: ${data.discord}
Antecedentes: ${data.antecedente}
Turnos: ${data.turnos}
Experiência: ${data.experiencia || '-'}
Observações: ${data.observacoes || '-'}
`;

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ content })
    });

    res.json({ sucesso: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ sucesso: false, erro: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
