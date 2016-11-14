/**
 * Created by Michael on 13.11.2016.
 */

//geht
//console.log(JSON.data1.values.length);
//geht auch
//console.log(JSON.data2.values[0].value1[0].value);

// TODO
// check if all data has the same amount of values (2 as of now)

// TODO
// sum up all values (alle value1s = 1st sum, all value2s = 2nd sum) of each data
// in this example we need sumV1 = 800 // sumV2 == 12

function getJsonText(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

let json = JSON.parse(getJsonText("../src/data.json"));

var allsums = [];
for (var i = 0; i < json[0].values.length; i++) {
    var r = json.reduce(function(t,cv,ci) {
        if (t[cv.values[i].name]) {
            t[cv.values[i].name] += cv.values[i].value;
        } else {
            t[cv.values[i].name] = cv.values[i].value;
        }
        return t;
    }, {});
    allsums[i] = r;
}



console.log(allsums);