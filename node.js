import fetch from "node-fetch";

export default defineComponent({
  async run({ steps, $ }) {
    const data = steps.trigger.event.body;

    await fetch('https://discord.com/api/webhooks/1439451133167927397/7owiU69Egepo89qEnYy0fJo0REofL8PabT6KFH7Q2_pZ2fgPc9if7sip6g1jUCg-rmv7', { // seu webhook do Discord
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        content: `Nova inscrição recebida:
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
Observações: ${data.observacoes || '-'}`
      })
    });

    await $.respond({
      status: 200,
      body: "Formulário enviado com sucesso!"
    });
  }
});
