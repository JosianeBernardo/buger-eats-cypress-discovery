
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '123525478',
            address: {
                postalcode: '53439360',
                street: 'Rua Rui Barbosa',
                number: '49',
                details: 'Casa',
                district: 'Janga',
                city_state: 'Paulista/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg.jpg'
        }

        return data

    }

}