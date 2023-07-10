function carregaDicionario() {
    var biografias = {
      bio01: {
        nome: "Estou pronto!",
        imagem: "https://img.elo7.com.br/product/original/3254FDB/bob-esponja-e-patrick-em-camadas-arquivo-de-corte-personalizados-bob-esponja-e-patrick.jpg",
        descricao:
          "Frase dita pelo personagem Bob Esponja, do desenho de mesmo nome, quando este está pronto para caçar águas-viva ou iniciar uma aventura junto com seus amigos.",
      },
      bio02: {
        nome: "Eu acho que vi um gatinho",
        imagem: "https://www.tricurioso.com/wp-content/uploads/2020/05/o-piu-piu-e-macho-ou-femea.jpg",
        descricao:
          "Expressão usada pelo personagem Piu Piu, em Piu Piu e Frajola, quando o personagem encontra o Frajola, que é uma raça de gatos.",
      },
      bio03: {
        nome: "O que é que há, velhiho?",
        imagem: "https://media.gazetadopovo.com.br/2016/02/9c1afb1c8c51cf31c6911fbc22743386-gpMedium.jpg",
        descricao:
          "Expressão usada pelo personagem Pernalonga, no desenho animado Looney Tunes, em tom irônico quando ele encontra algum personagem.",
      },
      bio04: {
        nome: "Não tem respeito",
        imagem: "https://nishiweb.com.br/animecomics/images/upload/531.jpg",
        descricao:
          "Frase dita pelo personagem Tutubarão, do desenho de mesmo nome, quando este se sente frustrado ou ofendido por algum personagem.",
      },
      bio05: {
       nome: "Você é desprezível",
        imagem: "https://super.abril.com.br/wp-content/uploads/2022/02/AMP_patolino.png",
        descricao:
          "Expressão usada pelo personagem Patolino, em Looney Tunes, quando se sente contrariado ou ofendido por algum personagem.",
      },
      bio06: {
        nome: "Yabba Dabba Doo!",
        imagem: "https://nishiweb.com.br/animecomics/images/upload/309.jpg",
        descricao:
          "Expressão usada pelo personagem Fred Flinstone, no desenho, Os Flinstones, quando acontece algo que o deixa muito feliz.",
      }
    };
  
    var content = document.getElementById("content");
  
    for (var bio in biografias) {
      content.innerHTML +=
        '<div class="card">' +
        '<img src="' +
        biografias[bio].imagem +
        '"/>' +
        "<details>" +
        "<summary>" +
        biografias[bio].nome +
        "</summary>" +
        "<p>" +
        biografias[bio].descricao +
        "</p>" +
        "<blockquote><q>" +
        "</details>" +
        "</div>";
    }
  }
  
  carregaDicionario();