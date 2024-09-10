# basic print
print('Hello, world!')
print('Wasim')

# printing multiple items
print('Wasim Rasheed')
print('1, 2, 3')

# printing special characters
print ('Hello \nWorld')
print('Hello    World!')

# using the sep parameter
print('apple', 'banana', 'cherry', sep=', ')
print(1, 2, 3, sep='-')

# using the end parameter
# ref: https://www.geeksforgeeks.org/gfact-50-python-end-parameter-in-print/
print('Hello', end=' ') # by default newline is the separator
print('World')

# escape characters
print('He said, "Hello!"')
print('This is a  backslash: \\') # add another backslash to add a backslash

# combining text and numbers
age = 20
print(type(age))
print('I am '+ str(age) +' years old')
print(f'I am {age} years old')
print('I am {} years old'.format(age))
print('I am %d years old' % age)

value = 5
print(f'This number is {value}')

# basic loop printing
a = range(1, 6)
print(a) # testing
for i in a:
    print(i)
