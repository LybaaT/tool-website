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
open('style.css', 'a').close()

# Create main.js
open('main.js', 'a').close()

# Create index.html.j2
with open('index.html.j2', 'w') as f:
    f.writelines("""<!DOCTYPE html>
<html>
<head>
	<title>TOOLNAME</title>
	{% include "/components/meta.html.j2" %}
    <link rel="stylesheet" href="/static/css/generaltool.css">
	<style>
        {% include "NAMESPACE/style.css" %}
	</style>
</head>
<body>
	{% include '/components/header.html.j2' %}

    <div class="borderContainer bannerContainer">
        <h1 class="toolTitle">TOOLNAME</h1>
        <p class="toolDescription">
        TOOLNAME is the perfect tool for you.
        </p>
    </div>

    <div class="borderContainer toolContainer">
        <h1>Content here</h1>
    </div>

    <script src="/static/js/general.js"></script>
    <script>
        {% include "NAMESPACE/main.js" %}
    </script>
  	
  	{% include "/components/footer.html.j2" %}
</body>
</html>
""".replace('TOOLNAME', name).replace('NAMESPACE', namespace))
    f.close()

# Done!

print("Done! Your site is available at http://localhost:3500/tool/" + namespace)