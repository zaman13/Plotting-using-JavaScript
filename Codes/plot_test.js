// Mohammad Asif Zaman
// Oct. 20, 2024
// JavaScript plotting test using Plotly library


// My plot wrapper (Oct. 23, 2024)




    


// The math function to plot
function my_math_test(x){
   const freq = .2;  // frequency
   const tau = 0.1; 

   yout = Math.sin(2*Math.PI*freq*x)*Math.exp(-tau*x);
   
   return yout;
}


{ // Creating block scope

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
    //Plotly.newPlot('plot_container', [tracer(xValues,yValues,'gray')], layout);

    z__plot('plot_container', xValues, yValues, Math.min(yValues), Math.max(yValues), 'green', 'x', 'f(x)');

} // Ending block scope