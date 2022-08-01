let itensJson = [
    {
        id:1,
        name:'Força do Vendaval', 
        img:'./assets/images/item.png', 
        price:3400, 
        attributes:{
            active: '<b>Ativo - Erupção das Brumas:</b> Avança na direção-alvo, disparando três projéteis no inimigo com a Vida mais baixa que estiver próximo ao destino do avanço (priorizando Campeões). Causa um total de 180 - 220 (Nv. 1 - 18) (+45% de Dano de Ataque adicional) de Dano mágico, aumentado em até 50% contra alvos com a Vida baixa (90s de Tempo de Recarga).',
            passive: '<b>Passivo Mítico: +3 de Velocidade de Movimento para cada item lendário.</b>'
        }, 
        description:`+60 Dano de Ataque <br/> +20% Velocidade de Ataque <br/> +20% Acerto Crítico `,
        datakey: 0
    },

    {
        id:2,
        name:'Gume do Infinito', img:'./assets/images/item02.png', 
        price:3400,
        attributes:{
            active: '',
            passive: '<b>Perfeição</b>: Se você tiver ao menos Chance de Acerto Crítico 65% de Chance de Acerto Crítico, receberá Dano de Acerto Crítico 35% de Dano de Acerto Crítico',
        },
        description:'+70 Dano de Ataque <br/> +20% Acerto Crítico',
        datakey: 1
    },

    {
        id:3, 
        name:'Dente de Na´Shor', 
        img:'./assets/images/item03.png', 
        price:3000, 
        attributes:{
            active: '',
            passive: '<b>Mordida Icathiana:</b> Ataques causam 15 + 20% de Poder de Habilidade como dano mágico ao contato',
        },
        description:'+100 Poder de Habilidade <br/> +50% Velocidade de Ataque',
        datakey: 2
    },

    {
        id:4, 
        name:'Tormenta de Luden', 
        img:'./assets/images/item04.png', 
        price:3200, 
        attributes:{
            active: '',
            passive: '<b>Eco:</b> causar dano a um inimigo com Habilidades causa 100 +10% de Poder de Habilidade como Dano Mágico adicional ao alvo e a 3 inimigos próximos, além de conceder a você 15% de Velocidade de Movimento por 2s (10s de Tempo de Recarga). Causar dano a Campeões com Habilidades reduz o Tempo de Recarga do item em 0.5s, até um máximo de 3s por conjuração. <br><br> <b>Passivo Mítico: concede a todos os outros itens Lendários 5 de Penetração Mágica.</b>',
        }, 
        description:'+80 Poder de Habilidade <br/> +6 Pen. Mágica <br/> +600 Mana <br/> +20 Aceleração de Habilidade',
        datakey: 3
    },

    {
        id:5, 
        name:'Glacieterno', 
        img:'./assets/images/item05.png', 
        price:3200, 
        attributes:{
            active: '<b>Ativo – Geleira:</b> causa 100 + 30% de Poder de Habilidade como Dano Mágico em cone e 65% de Lentidão aos inimigos por 1.5s. Inimigos no centro do cone são Enraizados (30s de Tempo de Recarga).',
            passive: '<b>Passivo Mítico: concede a todos os outros itens Lendários 15 de Poder de Habilidade.</b>',
        }, 
        description:'+70 Poder de Habilidade <br/> +250 Vida <br/> +600 Mana <br/> +20 Aceleração de Habilidade',
        datakey: 4
    },

    {
        id:6, 
        name:'Perdição de Lich', 
        img:'./assets/images/item06.png', 
        price:3000, 
        attributes:{
            active: '',
            passive: '<b>Lâmina Arcana:</b> depois de usar uma Habilidade, seu próximo Ataque é fortalecido e causa 150% do Dano de Ataque base + 40% de Poder de Habilidade como Dano Mágico adicional ao contato (2.5s de Tempo de Recarga).',
        }, 
        description:'+75 Poder de Habilidade <br/> +15 Aceleração de Habilidade <br/> +8% Velocidade de Movimento',
        datakey: 5
    },

    {
        id:7, 
        name:'Regenerador de Pedra Lunar', 
        img:'./assets/images/item07.png', 
        price:2500, 
        attributes:{
            active: '',
            passive: '<b>Graça Estrelada:</b> ao afetar Campeões com Ataques ou Habilidades em combate, restaura 70 de Vida ao aliado próximo mais ferido (2s de Tempo de Recarga). Cada segundo em combate com Campeões aumenta a cura e a Resistência do Escudo em 4% (máximo de 20%).<br><br> <b>Passivo Mítico: concede a todos os outros itens Lendários 10 de Vida aumentada na cura de Graça Estrelada.</b>',
        }, 
        description:'+40 Poder de Habilidade <br/> +200 Vida <br/> +20 Aceleração de Habilidade <br/> +100% Regen. de Mana Base',
        datakey: 6
    }
];
