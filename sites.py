from flask import Flask, render_template, request
from os import getcwd
from datetime import datetime
app = Flask(__name__)

PORT = 3500
DEBUG = 'root' not in getcwd()

toolnames_readable = {
    "termsofservicegenerator": "Terms of Service Generator",
    "privacypolicygenerator": "Privacy Policy Generator",
    "wordcounter": "Word Counter",
    "passwordgenerator": "Password Generator",
    "fancytextgenerator": "Fancy Text Generator",
    "metataggenerator": "Meta Tag Generator",
    "smalltextgenerator": "Small Text Generator",
    "summarizer": "Summarizer",
    "citationgenerator": "Citation Generator",
    "passwordstrengthchecker": "Password Strength Checker",
    "blogideagenerator": "Blog Idea Generator",
}

@app.route('/')
def homepage():
    return render_template('homepage.html.j2')

@app.route('/contact')
def contact():
    return render_template('contact.html.j2')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html.j2')

@app.route('/termsofservice')
def termsofservice():
    return render_template('termsofservice.html.j2')

@app.route('/tool/<toolname>')
def tool(toolname):
    return render_template(toolname + '/index.html.j2', pageTitle = toolnames_readable[toolname])

@app.route('/blog')
def blog():
    return render_template('blog.html.j2')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html.j2')

@app.before_request
def beforerequest():
    console_color_blue = '\033[94m'
    console_color_cyan = '\033[96m'
    console_color_white = '\033[0m'
    addr = request.environ.get('HTTP_X_REAL_IP', request.remote_addr)
    time = datetime.now().strftime("[%H:%M:%S]")
    url = request.url
    print(console_color_blue + time + ' ' + console_color_cyan + "{:<16}".format(addr) + console_color_white + url)

import backlinkchecker

if __name__ == '__main__':
    if DEBUG:
        app.run(port=PORT, debug=True)
    else:
        from waitress import serve
        print("Server is live!")
        serve(app, port=PORT, host="0.0.0.0", threads=2)