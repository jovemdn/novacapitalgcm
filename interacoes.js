// ======================= INTERACOES.JS =======================

// ======= TOAST DE BOAS-VINDAS =======
window.addEventListener('load', () => {
  const toast = document.createElement('div');
  toast.innerText = 'Bem-vindo à GCM - Nova Capital!';
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#004d80',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    opacity: '0',
    transition: '0.5s',
    zIndex: '9999'
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '1'; }, 100);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(()=>toast.remove(),500); }, 4000);
});

// ======= PRELOADER AVANÇADO COM LOGO =======
(function(){
  const preloader = document.createElement('div');
  Object.assign(preloader.style, {
    position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
    background: '#0011ff', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', zIndex: '10000',
    transition: 'opacity 0.5s ease'
  });
  preloader.id = 'preloader';

  // Logo
  const logo = document.createElement('img');
  logo.src = 'imagens/logo-gcm.png';
  logo.alt = 'Guarda Civil Metropolitana';
  logo.style.width = '120px';
  logo.style.height = 'auto';
  logo.style.marginBottom = '20px';
  preloader.appendChild(logo);

  // Texto carregando
  const texto = document.createElement('div');
  texto.innerText = 'Carregando...';
  Object.assign(texto.style, {fontSize:'24px', color:'#fff', fontWeight:'bold', marginBottom:'20px'});
  preloader.appendChild(texto);

  // Barra de progresso
  const barraContainer = document.createElement('div');
  Object.assign(barraContainer.style, {
    width:'300px', height:'15px', background:'rgba(255,255,255,0.2)',
    borderRadius:'8px', overflow:'hidden'
  });
  const barra = document.createElement('div');
  Object.assign(barra.style, {
    width:'0%', height:'100%', background:'#004d80', transition:'width 0.2s ease'
  });
  barraContainer.appendChild(barra);
  preloader.appendChild(barraContainer);
  document.body.appendChild(preloader);

  // Simula carregamento progressivo
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if(progress > 100) progress = 100;
    barra.style.width = progress + '%';
    if(progress >= 100){
      clearInterval(interval);
      preloader.style.opacity = '0';
      setTimeout(()=> preloader.remove(),500);
    }
  }, 200);
})();

// ======= BOTAO FAQ =======
(function(){
  const btnFAQ = document.createElement('button');
  btnFAQ.innerText = 'FAQ';
  Object.assign(btnFAQ.style, {
    position: 'fixed', bottom: '20px', right: '20px', background: '#004d80',
    color: '#fff', border: 'none', padding: '12px 20px', borderRadius:'8px',
    cursor:'pointer', zIndex:'9999', boxShadow:'0 0 10px rgba(0,0,0,0.5)'
  });
  document.body.appendChild(btnFAQ);

  const faqContainer = document.createElement('div');
  Object.assign(faqContainer.style, {
    position:'fixed', bottom:'70px', right:'20px', maxWidth:'350px',
    background:'rgba(0,0,0,0.8)', color:'#fff', borderRadius:'12px', padding:'15px',
    boxShadow:'0 0 20px rgba(0,0,0,0.6)', display:'none', overflowY:'auto', maxHeight:'400px'
  });
  document.body.appendChild(faqContainer);

  const faqs = [
    {q:'Como me inscrever?', a:'Preencha o formulário de inscrição e envie.'},
    {q:'Preciso ter Discord?', a:'Sim! O ID do Discord é obrigatório.'},
    {q:'Quais são os requisitos?', a:'Ser maior de idade, boa conduta e disponibilidade.'},
    {q:'Quando receberei retorno?', a:'Normalmente em até 48 horas.'},
    {q:'Posso enviar mais de uma inscrição?', a:'Não, apenas uma inscrição por cidadão.'},
    {q:'Como corrigir dados?', a:'Entre em contato via Discord para ajustes.'}
  ];

  faqs.forEach(f => {
    const item = document.createElement('div');
    item.style.marginBottom='10px';
    item.style.borderBottom='1px solid rgba(255,255,255,0.2)';

    const pergunta = document.createElement('div');
    pergunta.innerText = f.q;
    Object.assign(pergunta.style,{fontWeight:'bold', cursor:'pointer', padding:'8px 0'});

    const resposta = document.createElement('div');
    resposta.innerText = f.a;
    Object.assign(resposta.style,{maxHeight:'0', overflow:'hidden', transition:'max-height 0.4s ease, padding 0.4s ease', padding:'0 0'});

    pergunta.addEventListener('click', ()=>{
      if(resposta.style.maxHeight==='0px'||resposta.style.maxHeight==='0'){
        resposta.style.maxHeight=resposta.scrollHeight+'px';
        resposta.style.padding='5px 0';
      } else {
        resposta.style.maxHeight='0';
        resposta.style.padding='0 0';
      }
    });

    item.appendChild(pergunta);
    item.appendChild(resposta);
    faqContainer.appendChild(item);
  });

  btnFAQ.addEventListener('click', ()=>{
    faqContainer.style.display = faqContainer.style.display==='none'?'block':'none';
  });
})();

// ======= BARRA DE AVISO DE TERMOS E CONDIÇÕES =======
(function(){
  const slide = document.createElement('div');
  slide.innerText = '⚠️ Ao entrarem no site, vocês concordam com todos os termos e condições da Guarda Civil Metropolitana de Nova Capital.';
  Object.assign(slide.style,{
    position:'fixed', bottom:'0', left:'-100%', width:'100%',
    background:'#004d80', color:'#fff', padding:'15px', textAlign:'center',
    fontWeight:'bold', cursor:'pointer', zIndex:'9999'
  });
  document.body.appendChild(slide);

  setTimeout(()=> {
    slide.style.transition='left 0.5s ease';
    slide.style.left='0';
  },100);

  slide.addEventListener('click',()=>slide.remove());
  setTimeout(()=>slide.remove(),8000);
})();

// ======= BANNER DE ANUNCIOS =======
(function(){
  const textos=['🚨 Inscrições fechadas na GCM!','⚡ Participe do próximo evento!','🛡️ Protegendo Nova Capital desde sempre!'];
  const banner=document.createElement('div');
  Object.assign(banner.style,{
    marginTop:'80px', width:'100%', textAlign:'center', background:'#004d80',
    color:'#00ffff', fontSize:'24px', fontWeight:'bold', padding:'12px 0', transition:'opacity 0.5s', zIndex:'9999'
  });
  document.body.prepend(banner);
  let i=0;
  function mudarTexto(){
    banner.style.opacity='0';
    setTimeout(()=>{
      banner.innerText=textos[i];
      banner.style.opacity='1';
      i=(i+1)%textos.length;
    },500);
  }
  setInterval(mudarTexto,4000);
  mudarTexto();
})();

// ======= VIDEO LOCAL ESTILIZADO =======
(function(){
  const main=document.querySelector('main');
  const videoContainer=document.createElement('div');
  Object.assign(videoContainer.style,{
    maxWidth:'800px', margin:'10px auto', textAlign:'center', borderRadius:'12px',
    overflow:'hidden', boxShadow:'0 0 20px #00ffff, 0 0 40px #00ffff inset',
    transition:'box-shadow 0.5s ease-in-out', position:'relative'
  });
  setInterval(()=>{
    videoContainer.style.boxShadow='0 0 30px #00ffff, 0 0 60px #00ffff inset';
    setTimeout(()=>{ videoContainer.style.boxShadow='0 0 20px #00ffff, 0 0 40px #00ffff inset'; },500);
  },1500);

  const video=document.createElement('video');
  video.width=350;
  video.height=500;
  video.controls=true;
  video.style.borderRadius='8px';

  const source=document.createElement('source');
  source.src='videos/meuvideo.mp4';
  source.type='video/mp4';

  video.appendChild(source);
  videoContainer.appendChild(video);
  if(main) main.appendChild(videoContainer);
})();



// ======= LOGIN VIA DISCORD NA BARRA PRETA =======
(function(){
  const CLIENT_ID = '1440923087003451495'; // substitua pelo Client ID da sua app
  const REDIRECT_URI = 'https://gcmnovacapitalrp.netlify.app/'; // substitua pelo seu redirect URI
  const SCOPES = 'identify';

  // Cria botão
  const loginBtn = document.createElement('button');
  loginBtn.innerText = 'Login com Discord';
  Object.assign(loginBtn.style,{
    background:'#7289da',
    color:'#fff',
    border:'none',
    padding:'8px 16px',
    borderRadius:'6px',
    cursor:'pointer',
    fontWeight:'bold',
    fontSize:'14px',
    marginLeft:'10px',
    transition:'0.3s'
  });
  loginBtn.onmouseenter = ()=> loginBtn.style.transform='scale(1.05)';
  loginBtn.onmouseleave = ()=> loginBtn.style.transform='scale(1)';

  // URL OAuth2 do Discord
  const oauthURL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=token&scope=${SCOPES}`;
  loginBtn.onclick = () => { window.location.href = oauthURL; };

  // Adiciona na barra de topo
  const headerNav = document.querySelector('header nav');
  if(headerNav) headerNav.appendChild(loginBtn);

  // Captura token após redirect
  if(window.location.hash){
    const params = Object.fromEntries(new URLSearchParams(window.location.hash.substr(1)));
    const token = params.access_token;
    if(token){
      fetch('https://discord.com/api/users/@me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(user => {
        const userDiv = document.createElement('div');
        Object.assign(userDiv.style,{
          display:'flex', alignItems:'center', gap:'8px', color:'#fff', fontWeight:'bold', marginLeft:'10px'
        });
        userDiv.innerHTML = `
          <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png" width="30" height="30" style="border-radius:50%;">
          <span>${user.username}#${user.discriminator}</span>
        `;
        if(headerNav) headerNav.appendChild(userDiv);
        loginBtn.style.display = 'none'; // esconde botão após login
      })
      .catch(err => console.error('Erro ao buscar usuário:', err));
    }
  }
})();
