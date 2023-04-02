import os

os.chdir('templates/')

name = input('Enter new page name: ')
namespace = name.lower().replace(' ','')

if namespace in os.listdir('.'):
    print('Page "' + namespace + '" already exists in "templates"')
    exit()

os.mkdir(namespace)
os.chdir(namespace + '/')

# Create style.css
with open('style.css', 'w') as f:
    f.writelines(""".boilerplateMessage {
    color: var(--primary-text);
    margin: 40px;
    text-align: center;
}""")

# Create main.js
open('main.js', 'a').close()

# Create index.html.j2
with open('index.html.j2', 'w') as f:
    f.writelines("""<!DOCTYPE html>
<html>
<head>
	<title>TOOLNAME</title>
	{% include '/components/meta.html.j2' %}
	<style>
        {% include 'NAMESPACE/style.css' %}
	</style>
</head>
<body>
	{% include '/components/header.html.j2' %}

    <h1 class="boilerplateMessage">Welcome to TOOLNAME.</h1>

    <script>
        {% include 'NAMESPACE/main.js' %}
    </script>
  	
  	{% include "/components/footer.html.j2" %}
</body>
</html>
""".replace('TOOLNAME', name).replace('NAMESPACE', namespace))
    f.close()

# Done!

print("Done! Your site is available at http://localhost:3500/tool/" + namespace)