import random
botao = Element("botao")
div_element = Element("output")

def testing():
    div_element.write(f'{random.randint(0,10)}')

botao.element.onkeypress = testing
