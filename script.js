function Gerar() {
    var criador = window.document.querySelector('textarea#criador').value;
    var tipo = window.document.querySelector('select#tipo').value;
    var feira = window.document.querySelector('select#feira').value;
    var data = window.document.querySelector('input#data').value;
    var versao = window.document.querySelector('select#versao').value;
    var campanha = window.document.querySelector('select#campanha').value;
    var publico = window.document.querySelector('select#publico').value;
    var layout = window.document.querySelector('select#layout').value;
    var base = window.document.querySelector('textarea#boxbase').value;
    var objetivo = window.document.querySelector('textarea#boxobj').value;
    var informacoes = window.document.querySelector('textarea#boxinfo');
    var referencias = window.document.querySelector('textarea#boxref').value;

    var disc = window.document.querySelector('div#disc');

    var res = window.document.querySelector('div#res');
  
    // Current date function
    function formatoData (data = new Date()){
      var ano = data.getFullYear().toString().substr(-2);
      var mes = data.getMonth()+1;
      var dia = data. getDate();

      if(mes.toString().length == 1) mes = '0'+mes;
      if(dia.toString().length == 1) dia = '0'+dia;

      return ano+'/'+mes+'/'+dia;
    }

    // Fields validation
    if (criador.length == 0 || feira.length == 0 || data.length == 0 || versao.length == 0 || tipo.length == 0 || publico.length == 0 || campanha.length == 0 || layout.length == 0 || base.length == 0|| objetivo.length == 0 || informacoes.value.length <= 0 || referencias.length == 0) 
    {
      window.alert('Todos os campos devem ser preenchidos. 😉');

    } //else if (informacoes.value.trim().length <= 539){  
      //window.alert('Para uma comunicação assertiva, precisaremos de mais detalhes no campo "Informações obrigatórias"! 📝 \n\nMínimo de caracteres: 540');
      //setErrorFor(informacoes);

    //} 
    else {
    // ID EMAIL
    res.innerHTML = `${feira}${formatoData().split('/').join('')}${versao.toLowerCase()}_${tipo}_${publico}_${campanha}${layout.replace("-HTML", "")}`;
    
    // Layout PDFMAKE
    var option_feira = document.querySelector('select#feira').options[document.querySelector('select#feira').selectedIndex].innerText;
    var option_publico = document.querySelector('select#publico').options[document.querySelector('select#publico').selectedIndex].innerText;

    var dd = {
      content: [
		
        {text: 'Briefing E-mail Marketing', style: 'header'},

        {text:`${res.innerHTML}`},

        {text: ' ', style: ['small']},

        {text:'SOLICITANTE:', bold: true}, {text:`${criador}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:'EVENTO:', bold: true}, {text:`${option_feira}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`DATA DE CRIAÇÃO:`, bold: true}, {text:`20${formatoData()}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`DATA DE DISPARO:`, bold: true}, {text:`${data.split('-').join('/')}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`VERSÃO:`, bold: true}, {text:`${versao}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`TIPO:`, bold: true}, {text:`${tipo}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`PÚBLICO:`, bold: true}, {text:`${option_publico}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`CAMPANHA:`, bold: true}, {text:`${campanha}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`LAYOUT:`, bold: true}, {text:`${layout.split('-').join('')}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},
        
        {text:`BASES DE ENVIO:`, bold: true}, {text:`${base}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`OBJETIVO:`, bold: true}, {text:`${objetivo}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`INFORMAÇÕES OBRIGATÓRIAS:`, bold: true}, {text:`${informacoes.value}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},

        {text:`FONTES DE INFORMAÇÕES / REFERÊNCIAS:`, bold: true}, {text:`${referencias}`, color: '#3b3b3b'},

        {text: ' ', style: ['small']},
      ],

      styles: {
        header: {
          fontSize: 22,
          bold: true
        },
        small:{
          fontSize: 20
        },
      }
    };

    // ID Box color
    switch (tipo) {
      case 'PADRAO': res.style.background = 'green'
                     res.style.color = 'white'
                     disc.innerHTML = '*este é um email padrão!'
      break;

      case 'URGENTE': res.style.background = 'red'
                      res.style.color = 'white'
      break;

      case 'IMPORTANTE': res.style.background = 'yellow'
                         res.style.color = 'black'
      break;

      case 'EXTRA': res.style.background = 'orange'
                    res.style.color = 'white'
      break;

      case 'COBERTURA': res.style.background = 'blue'
                        res.style.color = 'white'
      break;

      case 'REGUA': res.style.background = 'purple'
                    res.style.color = 'white'
      break;

      default: res.innerHTML = '[ERRO] Tipo não selecionado.'
               res.style.color = 'black'
      break;
    }
    
    // PDF Export
    pdfMake.createPdf(dd).download(res.innerHTML);
  }
}

// red border "Informações obrigatórias:" field
function setErrorFor(textarea) {
  const formGroup = textarea.parentElement;
  formGroup.className = 'form-group error';
}


//characters remaining function
/*var informacoes = window.document.querySelector('textarea#boxinfo');
var caracteres = window.document.querySelector('div#caracteres-restantes');
var max_chars = 540;

informacoes.addEventListener('input', () => { 
    var restante = max_chars - informacoes.value.trim().length;
    caracteres.textContent = `${restante} caracteres restantes`;
  });*/


//disclaimer
//var disc = window.document.querySelector('div#disc');
//var tipoD = window.document.querySelector('div#tipo');

//disc.innerHTML = '*este é um email padrão'

function disclaimer() {
var disc = window.document.querySelector('div#disc');
var tipoD = window.document.querySelector('select#tipo').value;

  if (tipoD === ''){

    disc.innerHTML = ''
  } else {
    switch (tipoD) {
      case 'PADRAO': disc.innerHTML = '<i>*Padrão – Previsto no planejamento de marketing (operacional ou digital). Exemplo: abertura do credenciamento.</i>';
      break;

      case 'URGENTE': disc.innerHTML = '<i>*Urgente – Demanda prevista, porém antecipada ou problema a resolver. Exemplo: queda de energia pavilhão.</i>';
      break;

      case 'IMPORTANTE': disc.innerHTML = '<i>*Importante – Necessidade de prioridade entre as demandas tipo Padrão.</i>';
      break;

      case 'EXTRA': disc.innerHTML = '<i>*Extra – Demanda nova não prevista no planejamento. Prazo igual ao Padrão.</i>';
      break;

      case 'COBERTURA': disc.innerHTML = '<i>*Cobertura – Disparos previstos durante a realização do evento. Exemplo: “Começa Hoje”, “é o penúltimo dia”.</i>';
      break;

      case 'REGUA': disc.innerHTML = '<i>*Régua – Envios dentro da estratégia de automação de emkt. Novos disparos para quem interagiu com a peça + disparos automáticos de reforço para quem não abriu.</i>';
      break;

      default: disc.innerHTML = '';
      break;
    };
  };
};