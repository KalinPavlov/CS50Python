import requests

from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/convert", methods=["POST"])
def convert():
    currency = request.form.get("currency")
    res = requests.get("http://data.fixer.io/api/latest", params={
        "access_key": "19a12496e268c442f2958e1fe7d371ee", "symbols": currency})

    if res.status_code != 200:
        return jsonify({"success": False})

    data = res.json()
    
    if data.get("rates") is None:
        return jsonify({"success": False})

    return jsonify({"success": True, "rate": data["rates"][currency]})
