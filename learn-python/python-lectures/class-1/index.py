print('Hello world')

name : str = '22'
print(type(name))
print(id(name))
print([i for i in dir(name) if('__') not in i])