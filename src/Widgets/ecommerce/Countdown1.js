function Countdown1() {

    const [days, setdays] = React.useState(0); 
    const [hrs, sethrs] = React.useState(0); 
    const [minutes, setminutes] = React.useState(0); 
    const [seconds, setseconds] = React.useState(0); 

    



    // set the date we are counting down to
    var countDown = new Date("jan 1, 2027 12:12:50").getTime();
     
    //update the count down in every 1 second
    var update = setInterval(function () {
     
        // get the today's date and time
        var now = new Date().getTime();
      
        //find the difference b/w countDown and now
        var diff = countDown - now;
      
        //now we are calculating time in days, hrs, minutes, and seconds.
        setdays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        sethrs(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setminutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
        setseconds(Math.floor((diff % (1000 * 60)) / 1000));
      
        //now output the result in an element with id ="time"
        // if (diff < 0) {
        //    clearInterval(update);
        //    document.getElementById("time").innerHTML = "Expired";
        // }
     }, 1000);

  return (
    <div id='countdown1'>
        <h1 className='countdown1_title'>Limited-time offer! Sale ends in</h1>
        <div className='countdown1_nums'>
            <div className='countdown1_days'>
                <div className='countdown1_days_one'>
                    <h1 className='digits1'>{days.toString().charAt(0)}</h1>
                </div>
                <div className='countdown1_days_two'>
                    <h1 className='digits1'>{days.toString().charAt(1)}</h1>
                </div>
                <div className='countdown1_days_three'>
                    <h1 className='digits1'>{days.toString().charAt(2)}</h1>  
                </div>
                <p className='type1'>Days</p>
            </div>
            <div className='countdown1_hrs'>
                <div className='countdown1_days_one'>
                    <h1 className='digits1'>{hrs.toString().charAt(0)}</h1>
                </div>
                <div className='countdown1_days_two'>
                    <h1 className='digits1'>{hrs.toString().charAt(1)}</h1>
                </div>
                <p className='type1'>Hours</p>
            </div>
            <div className='countdown1_minutes'>
                <div className='countdown1_days_one'>
                    <h1 className='digits1'>{minutes.toString().charAt(0)}</h1>
                </div>
                <div className='countdown1_days_two'>
                    <h1 className='digits1'>{minutes.toString().charAt(1)}</h1>
                </div>
                <p className='type1'>Minutes</p>
            </div>
            <div className='countdown1_seconds'>
                <div className='countdown1_days_one'>
                    <h1 className='digits1'>{seconds.toString().charAt(0)}</h1>
                </div>
                <div className='countdown1_days_two'>
                    <h1 className='digits1'>{seconds.toString().charAt(1)}</h1>
                </div>
                <p className='type1'>Seconds</p>
            </div>
        </div>
        <button className='countdown1_btn'>SHOP NOW</button>
    </div> 
  )
}


ReactDOM.render(<Countdown1/>, document.querySelector("#countdown1"))
