// #Escrevendo as classes de um Jogo

//Implementação da Class Hero
class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    /* Método implementado para classificação:
        se mago -> no ataque exibir (usou magia)
        se guerreiro -> no ataque exibir (usou espada)
        se monge -> no ataque exibir (usou artes marciais)
        se ninja -> no ataque exibir (usou shuriken) */
    attack(tipo){
        switch(tipo){
            case "mago":
                return "magia"
                break
            case "guerreiro":
                return "espada"
                break
            case "monge":
                return "artes marciais"
                break
            case "ninja":
                return "shuriken"
                break
        }

    }
}

//Instanciando 2 objetos da class Hero
let hero1 = new hero("Paulo", 44, "ninja")
let hero2 = new hero("Jin Hu", 65, "guerreiro")

// Saída esperada: "o {tipo} atacou usando {ataque}"
console.log(`${hero1.nome} o ${hero1.tipo}, atacou usando ${hero1.attack(hero1.tipo)}`)
console.log(`${hero2.nome} o ${hero2.tipo}, atacou usando ${hero1.attack(hero2.tipo)}`)
