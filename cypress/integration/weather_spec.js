
const weather = {};
let temp = {}

context('Window', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/en')
        temp = {}
    })
    it('fetch Yavne weather', () => {
        // https://on.cypress.io/document

        const input = cy.get("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input")
        input.first().focus().type("Yavne weather");
        cy.get("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b").click({force: true}).then(() => {

            cy.get("#wob_loc").invoke('text').then(txt => {
                temp.name = txt
            })

            cy.get("#wob_tm").invoke('text').then(txt => {
                temp.temprature = txt
            })
            cy.get("#wob_dcp").invoke('text').then(txt => {
                temp.description = txt
            })
            cy.get("#wob_hm").invoke('text').then(txt => {
                temp.humidity = txt
            })
            cy.get("#wob_ws").invoke('text').then(txt => {
                temp.wind = txt
            })
            cy.get("#wob_tci").invoke('attr', 'src').then(txt => {
                temp.icon = txt
            })

        })

      weather["Yavne"]=temp;
        cy.writeFile('src/data.json', weather)
    });
    it('fetch London weather', () => {
        // https://on.cypress.io/document

        const input = cy.get("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input")
        input.first().focus().type("London weather");
        cy.get("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b").click({force: true}).then(() => {

            cy.get("#wob_loc").invoke('text').then(txt => {
                temp.name = txt
            })

            cy.get("#wob_tm").invoke('text').then(txt => {
                temp.temprature = txt
            })
            cy.get("#wob_dcp").invoke('text').then(txt => {
                temp.description = txt
            })
            cy.get("#wob_hm").invoke('text').then(txt => {
                temp.humidity = txt
            })
            cy.get("#wob_ws").invoke('text').then(txt => {
                temp.wind = txt
            })
            cy.get("#wob_tci").invoke('attr', 'src').then(txt => {
                temp.icon = txt
            })

        })

    weather["London"]=temp;
        cy.writeFile('src/data.json', weather)
    });

})
