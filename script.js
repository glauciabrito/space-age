function verificar() {
    let fage = document.getElementById('txtage') //o que foi digitado na caixa de texto txtano - está no html
    let nage = Number(fage.value)
    let earthYears = nage / 31557600
    let res = document.querySelector('div#res')
    let fplan = document.getElementsByName('radplan')
    let planet = ''
    let age = ''
    
        if (fplan[0].checked) { //Zero is mercury, because it's the first option
            planet = 'Mercúrio'
            age = Number((earthYears / 0.2408467).toFixed(2))
         } else if (fplan[1].checked) { //One is venus
            planet = 'Vênus'
            age = Number((earthYears / 0.61519726).toFixed(2))
        } else if (fplan[2].checked) { //Two is earth
            planet = 'Terra'
            age = Number(earthYears.toFixed(2))
        } else if (fplan[3].checked) { //Three is mars
            planet = 'Marte'
            age = Number((earthYears / 1.8808158).toFixed(2))
        } else if (fplan[4].checked) { //Four is jupiter
            planet = 'Júpiter'
            age = Number((earthYears / 11.862615).toFixed(2))
        } else if (fplan[5].checked) { //Five is saturn
            planet = 'Saturno'
            age = Number((earthYears / 29.447498).toFixed(2))
        } else if (fplan[6].checked) { //Six is uranus
            planet = 'Urano'
            age = Number((earthYears / 84.016846).toFixed(2))
        } else if (fplan[7].checked) { //Seven is neptune
            planet = 'Netuno'
            age = Number((earthYears / 164.79132).toFixed(2))
        }
        res.style.textAlign = 'center'
        res.innerHTML = `No planeta ${planet} você tem ${age} anos.`
        
}

