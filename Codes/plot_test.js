// Mohammad Asif Zaman
// Oct. 20, 2024
// JavaScript plotting test using Plotly library


// A function that returns trace
function tracer(x1,y1,clr) {
    let trace = {
        x: x1,
        y: y1,
        mode: 'lines+markers',
        marker: {color: clr},
    }
    return trace;
};

const layout = {
    xaxis: { title: 'time (s)' },
    yaxis: { title: 'Function value'},
}
    


// The math function to plot
function my_math_test(x){
   const freq = .2;  // frequency
   const tau = 0.1; 

   yout = Math.sin(2*Math.PI*freq*x)*Math.exp(-tau*x);
   
   return yout;
}

// Parameters

const Npoints = 500;
const t_start = 0;
const t_end = 40;
const del_t = (t_end-t_start)/Npoints;



// Generate data points

// Initialize arrays and independent variable
let xValues = [];
let yValues = [];
let t = 0;

// populate array
for (let i = 0; i <= Npoints; i++) {
    xValues[i] = t;
    yValues[i] = my_math_test(t);
    t = t + del_t;
}


// Plot the data
console.log('In java script plot_test.js file');
Plotly.newPlot('plot_container', [tracer(xValues,yValues,'gray')], layout);