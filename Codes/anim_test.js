{ // Creating block scope

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Example arrays
    let t_set = nj.arange(0, 12*Math.PI, 0.1);
    let y_set = nj.multiply(nj.sin(t_set), 2);

    // Convert NumJS arrays to regular JavaScript arrays
    let t_list = t_set.tolist();
    let y_list = y_set.tolist();





    // Plot the data
    //Plotly.newPlot('numjs_container', [tracer(t_list,y_list,'darkred')], layout);
    
    z__plot("anim_container", t_list, y_list, 'blue', 't', 'g(t)');


} // Ending block scope