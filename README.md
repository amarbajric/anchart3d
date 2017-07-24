
# anchart3d

## A library for 3-dimensional charts utilizing three.js and tween.js

#### Contributors
- Amar Bajric ([amarbajric](https://github.com/amarbajric))
- Michael Fuchs ([deKilla](https://github.com/deKilla))
- Timo Hasenbichler ([timoooo](https://github.com/timoooo))

# Preface

This project has been developed by three ambitious students, who are studying at the university "FH Joanneum" in Graz, Austria. 
The project is an open source library for visualizing JSON data as three dimensional Charts (e.g. Pie Charts or Bar Charts), which are not 
just perspective 3D, but are also interactive (e.g. you can zoom in/out or rotate), and therefore visualize a lot more data. 
It offers an intuitive configuration and is overall very comprehensible due to the structured and easy-to-use API.

#### <i class="icon-file"></i> Getting started

Just include the anchart3d.js in your document. All other dependencies are bundled into that file and you're ready to go.

```
<script type="text/javascript" src="js/anchart3d.js"></script>
```
There is also an optional stylesheet file "anchart3d.css", that contains basic styling information to get things started easier. 
After that, you can (optionally) configure the chart and initialize it:

```
var configuration = {
    "details": true,
    "tooltip": true,
    "showOnScreenControls": true,
    "legend": true,
    "startAnimation": true,
    "antialias": true,
};

 var pieChart = anchart3d.createChart("anchart3d")
    .setConfig(configuration)
    .pieChart()
    .data(jsonData)
    .draw();
```
createChart("anchart3d") points to a <div> in the document having the id="anchart3d". This div will contain all chart related elements. The name or id of the div can be anything and must be passed as argument to the createChart() method. 
For an explanation of the the configuration parameters and an detailed overview, please have a look at the link in the following chapter section.


#### Further reading

For more information about the library (demos, configuration, usage, ...) feel free to have a look at the project website:

https://dekilla.github.io/anchart3d