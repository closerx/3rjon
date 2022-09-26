from flask import Flask, render_template
import requests
app = Flask(__name__,template_folder="./Templates")
def get_data(city):
	url="http://api.aladhan.com/v1/timingsByCity?city="+city+"&country=Kingdom%20Saudia%20Arabia&method=4"
	response=requests.get(url).json()
	hijri=response["data"] ["date"]["hijri"]["date"]
	mladi=response["data"]["date"]["gregorian"]["date"]
	times=response["data"]["timings"]
	month=response["data"]["date"]["hijri"]["month"]["ar"]
	day=response["data"]["date"]["hijri"]["weekday"]["ar"]
	data={
	"times":times,
	"hijri":hijri,
	"mladi":mladi,
	"month":month,
	"day":day
	}
	return data
@app.route('/')
def index():
    return render_template("index.html")
    
@app.route('/data/<name>')
def my_view_func(name):
    return get_data(name)   
if __name__ == "__main__":
	app.run()
