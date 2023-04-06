from flask import Flask, render_template

app = Flask(__name__)

PORT = 3500

@app.route('/')
def homepage():
    return render_template('homepage.html.j2')

@app.route('/contact')
def contact():
    return render_template('contact.html.j2')

@app.route('/tool/<toolname>')
def tool(toolname):
    return render_template(toolname + '/index.html.j2')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html.j2')

app.run(port=PORT, host="0.0.0.0", debug=True)