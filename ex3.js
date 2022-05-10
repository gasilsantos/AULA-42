var pessoa = {
     "nome": "cassiano",
     "idade": 32,
     "cpf": "00000000",
     "competencias":["javascript","cloud", "api"],
     "atividades":[
         {
             "descrição":"reunião da DIO",
             "horario":"9:00am"
         },
         {
             "descrição":"transforma tec",
             "horario":"2:00pm"
         }
     ]
}

console.log("pessoa", pessoa)

console.log("nome da pessoa:", pessoa.nome)

console.log("competencia da pessoa:", pessoa.competencias[2])

console.log("nome da atividade da pessoa:",pessoa.atividades[0].horario)

//pessoa[0]

//pessoa.nome