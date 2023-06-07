import requests
from bs4 import BeautifulSoup
from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Take the user input from the form
        url = request.form['input']

        # Make a request to that url and get the HTML content
        headers = {'Accept-Language': 'en'}
        response = requests.get(url, headers=headers)
        html_content = response.content
        
        # Create a list containing all that <a> tags in the html and format it to show the href and innerText
        backlinks = [
            f"URL: {link['href']}, Anchor Text: {link.get_text()}"
            for link in BeautifulSoup(html_content, 'html.parser').find_all('a')
        ]

        # Return a textarea to the user containing all the formatted backlinks
        return render_template_string('<textarea id="output" rows="10" cols="50">{{ backlinks }}</textarea>', backlinks='\n'.join(backlinks))
        
    return render_template_string('<form method="POST"><input type="text" name="input" id="input"><br><input type="submit" value="Submit"></form>')

if __name__ == '__main__':
    app.run(port = 3600, debug = True)