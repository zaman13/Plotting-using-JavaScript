// Mohammad Asif Zaman
// Oct. 24, 2024

// Plot wrapper
// This js file shold be called ahead of the other js files since
// it has the functins the other js file needs to call

function z__plot(loc_ref, xp, yp, cl, xlabel, ylabel ){
    
    const lout = {
        xaxis: { title: xlabel },
        yaxis: { title: ylabel},
    }
    Plotly.newPlot(loc_ref, [tracer(xp, yp, cl)], lout);
}

// A function that returns trace
function tracer(x1,y1,cl) {
    let trace = {
        x: x1,
        y: y1,
        mode: 'lines+markers',
        marker: {color: cl},
    }
    return trace;
};

