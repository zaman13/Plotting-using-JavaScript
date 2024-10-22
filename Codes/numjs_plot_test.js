// Example arrays
let t_set = nj.arange(0, 8*Math.PI, 0.1);
let y_set = nj.multiply(nj.sin(t_set), nj.exp(t_set.multiply(-0.1)));

// Convert NumJS arrays to regular JavaScript arrays
let t_list = t_set.tolist();
let y_list = y_set.tolist();



// Plot the data
Plotly.newPlot('numjs_container', [tracer(t_list,y_list,'darkred')], layout);
