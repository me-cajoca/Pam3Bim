export function BuscarIMG(Nome, Evolucao){

  let imagem
  let NamePKM
  let descricao

  // KANTO
  if (Nome == "Bulbasaur") {

    if (Evolucao == 1) {
      imagem = require('./assets/Kanto/bulbasaur.png')
      NamePKM = "Bulbasaur"
      descricao = "Tipo Planta/Veneno. Bulbasaur é resistente e ótimo no início de jornada, com vantagem contra Água e Terra. Destaque para controle com status e sustain."
    }

    else if (Evolucao == 2) {
      imagem = require('./assets/Kanto/ivysaur.png')
      NamePKM = "Ivysaur"
      descricao = "Tipo Planta/Veneno. Evolução mais equilibrada, ganha mais poder ofensivo e mantém boa defesa. Forte contra Água, Terra e Pedra."
    }

    else if (Evolucao == 3) {
      imagem = require('./assets/Kanto/venosaur.png')
      NamePKM = "Venusaur"
      descricao = "Tipo Planta/Veneno. Um tanque versátil com grande sustain. Excelente em controle de campo e status como sono e envenenamento."
    }
  }

  else if (Nome == "Charmander") {

    if (Evolucao == 1) {
      imagem = require('./assets/Kanto/charmander.png')
      NamePKM = "Charmander"
      descricao = "Tipo Fogo. Frágil no início, mas com grande potencial de crescimento. Forte contra Planta, Gelo e Inseto."
    }

    else if (Evolucao == 2) {
      imagem = require('./assets/Kanto/charmeleon.png')
      NamePKM = "Charmeleon"
      descricao = "Tipo Fogo. Mais agressivo e veloz, com ataques mais fortes. Ainda frágil defensivamente, mas perigoso em dano direto."
    }

    else if (Evolucao == 3) {
      imagem = require('./assets/Kanto/charizard.png')
      NamePKM = "Charizard"
      descricao = "Tipo Fogo/Voador. Poderoso atacante especial e físico, excelente mobilidade e forte contra Planta, Inseto e Lutador."
    }
  }

  else if (Nome == "Squirtle") {

    if (Evolucao == 1) {
      imagem = require('./assets/Kanto/Squirtle.png')
      NamePKM = "Squirtle"
      descricao = "Tipo Água. Defensivo desde o início, ótimo contra Fogo, Pedra e Terra. Alta durabilidade."
    }

    else if (Evolucao == 2) {
      imagem = require('./assets/Kanto/wartortle.png')
      NamePKM = "Wartortle"
      descricao = "Tipo Água. Evolução equilibrada com boa defesa e ataque. Aguenta bem lutas prolongadas."
    }

    else if (Evolucao == 3) {
      imagem = require('./assets/Kanto/blastoise.png')
      NamePKM = "Blastoise"
      descricao = "Tipo Água. Tanque com grande poder de ataque especial. Ideal para controle e dano consistente à distância."
    }
  }

  // HOENN
  else if (Nome == "Treecko") {

    if (Evolucao == 1) {
      imagem = require('./assets/Hoenn/treecko.png')
      NamePKM = "Treecko"
      descricao = "Tipo Planta. Rápido e ágil, bom início de jornada com vantagem contra Água, Terra e Pedra."
    }

    else if (Evolucao == 2) {
      imagem = require('./assets/Hoenn/grovyle.png')
      NamePKM = "Grovyle"
      descricao = "Tipo Planta. Evolução veloz e ofensiva, com grande mobilidade e ataques rápidos."
    }

    else if (Evolucao == 3) {
      imagem = require('./assets/Hoenn/sceptile.png')
      NamePKM = "Sceptile"
      descricao = "Tipo Planta. Extremamente rápido e ofensivo, ótimo atacante especial com alta evasão e pressão."
    }
  }

  else if (Nome == "Torchic") {

    if (Evolucao == 1) {
      imagem = require('./assets/Hoenn/torchic.png')
      NamePKM = "Torchic"
      descricao = "Tipo Fogo. Inicial equilibrado, com potencial de crescimento forte em ataque."
    }

    else if (Evolucao == 2) {
      imagem = require('./assets/Hoenn/combusken.png')
      NamePKM = "Combusken"
      descricao = "Tipo Fogo/Lutador. Ganha versatilidade com ataques físicos fortes e boa ofensiva."
    }

    else if (Evolucao == 3) {
      imagem = require('./assets/Hoenn/blaziken.png')
      NamePKM = "Blaziken"
      descricao = "Tipo Fogo/Lutador. Atacante explosivo com altíssimo poder físico e especial, excelente para derrubar adversários rápido."
    }
  }

  else if (Nome == "Mudkip") {

    if (Evolucao == 1) {
      imagem = require('./assets/Hoenn/mudkip.png')
      NamePKM = "Mudkip"
      descricao = "Tipo Água. Inicial robusto com boa defesa e vantagem contra Fogo, Pedra e Terra."
    }

    else if (Evolucao == 2) {
      imagem = require('./assets/Hoenn/marshtomp.png')
      NamePKM = "Marshtomp"
      descricao = "Tipo Água/Terra. Muito resistente, com poucas fraquezas e ótimo controle de combate."
    }

    else if (Evolucao == 3) {
      imagem = require('./assets/Hoenn/swampert.png')
      NamePKM = "Swampert"
      descricao = "Tipo Água/Terra. Tanque extremamente forte, quase sem fraquezas, excelente ataque físico e defesa."
    }
  }

  // FALLBACK
  else {
    imagem = require('./assets/sem_imagem.jpg')
    NamePKM = "Desconhecido"
    descricao = "Pokémon não encontrado no catálogo."
  }

  return {
    imagem,
    NamePKM,
    descricao
  }
}