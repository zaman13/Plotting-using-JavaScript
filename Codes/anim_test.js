{ // Creating block scope



    // Example arrays
    let t_set = nj.arange(0, 9*Math.PI, .1);
    let y_set = nj.multiply(nj.sin(t_set), nj.exp(t_set.multiply(-0/20)));

    // Convert NumJS arrays to regular JavaScript arrays
    let t_list = t_set.tolist();
    let y_list = y_set.tolist();

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }



    z__plot("anim_container", t_list, y_list, -1, 1, 'blue', 't', 'g(t)');


    for (let i = 0; i < 12; i ++){
        Plotly.animate('anim_container', {
            data: [{y: nj.multiply(nj.sin(t_set), nj.exp(t_set.multiply(-i/20))).tolist() }],
          
        }, {
            transition: {
            duration: 500,
            easing: 'cubic-in-out'
            },
            frame: {
            duration: 500
            }
        })
        //delay(500);

    }
   





    // Plot the data
    //Plotly.newPlot('numjs_container', [tracer(t_list,y_list,'darkred')], layout);
    
  
} // Ending block scope