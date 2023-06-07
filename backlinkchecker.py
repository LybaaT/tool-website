from __main__ import app

from bs4 import BeautifulSoup
from flask import request
import requests

@app.route('/api/backlinkchecker')
def api_backlinkchecker():

    # Take the user input from the form
    url = request.args.get('url', type = str)

    if url == None:
        return 'No URL provided'

    # Make a request to that url and get the HTML content with the Accept-Language header set to 'en'
    headers = {'Accept-Language': 'en'}
    response = requests.get(url, headers=headers)
    html_content = response.content

    # Create a list containing all the <a> tags in the HTML and format it to show the href and innerText
    backlinks = [
        [link['href'], link.get_text()]
        for link in BeautifulSoup(html_content, 'html.parser').find_all('a')
    ]

    # Return a textarea to the user containing all the formatted backlinks
    return backlinks
