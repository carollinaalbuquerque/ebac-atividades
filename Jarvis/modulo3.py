codigo_de_seguranca = '010'
codigo_de_seguranca_cadastro = '010'
senha = 1234
senha_cadastro = 1234

pode_efetuar_pagamento = codigo_de_seguranca == codigo_de_seguranca_cadastro
print(pode_efetuar_pagamento)
if pode_efetuar_pagamento:
    print("Pagamento efetuado")
else:
    print("Erro: código de segurança inválido")

if (codigo_de_seguranca) == (codigo_de_seguranca_cadastro) & (senha == senha_cadastro):
    print("Pagamento efetuado")
elif (codigo_de_seguranca != codigo_de_seguranca_cadastro) & (senha == senha_cadastro):
    print("Erro: Código de segurança inválido")
elif (codigo_de_seguranca == codigo_de_seguranca_cadastro) & (senha != senha_cadastro):
    print("Erro: Senha inválida")
else:
    print("Erro: Código de segurança e senha inválidos")
nome = "Ana Carollina"
idade = 19
try:
    apresentacao = "Fala pessoal, meu nome é" + nome + "e eu tenho" + idade +"anos"
    print(apresentacao)
except TypeError:
    idade = str(idade)
finally:
    print ("Segunda chance")
    apresentacao = "Fala pessoal, meu nome é" + nome + "e eu tenho" + idade + "anos"
    print (apresentacao)