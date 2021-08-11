
const App = () => {

    const [exp,setExp] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const display=(symbol)=>{
        setExp(prev => prev+symbol)
        if(exp[exp.length-1]=="="){
            if(/[0-9.]/.test(symbol)){
                setExp(symbol);
            }
            else{
                setExp(answer+symbol);  
            }
        }
    }

    const calculate=()=>{
        setAnswer(eval(exp));
        setExp(prev => prev+"=")
    }

    const allClear=()=>{
        setExp("");
        setAnswer(0);
    }

    return (
    <>
    <div className="container mt-5">
        <div className="row black">
            <div className="row ml-1 text-white justify-content-end pt-3" style={{height: "50%", width: "95%"}}><h6>{exp}</h6></div>
            <div className="row ml-1 justify-content-end text-white pt-2" style={{height: "50%", width: "95%"}}><h4>{answer}</h4></div>
        </div>
        <div className="row first">
            <div onClick={allClear} className="btn btn-danger pt-4" style={{width: "50%"}}>AC</div>
            <div onClick={()=>display("/")} className="btn btn-secondary pt-4" style={{width: "25%"}}>/</div>
            <div onClick={()=>display("*")} className="btn btn-secondary pt-4" style={{width: "25%"}}>X</div>
        </div>
        <div className="row second">
            <div onClick={()=>display("7")} className="btn btn-dark pt-4" style={{width: "25%"}}>7</div>
            <div onClick={()=>display("8")} className="btn btn-dark pt-4" style={{width: "25%"}}>8</div>
            <div onClick={()=>display("9")} className="btn btn-dark pt-4" style={{width: "25%"}}>9</div>
            <div onClick={()=>display("-")} className="btn btn-secondary pt-4" style={{width: "25%"}}>-</div>
        </div> 
        <div className="row third">
            <div onClick={()=>display("4")} className="btn btn-dark pt-4" style={{width: "25%"}}>4</div>
            <div onClick={()=>display("5")} className="btn btn-dark pt-4" style={{width: "25%"}}>5</div>
            <div onClick={()=>display("6")} className="btn btn-dark pt-4" style={{width: "25%"}}>6</div>
            <div onClick={()=>display("+")} className="btn btn-secondary pt-4" style={{width: "25%"}}>+</div>
        </div> 
        <div className="row fourth">
            <div onClick={()=>display("1")} className="btn btn-dark pt-4" style={{width: "25%", height: "100%"}}>1</div>
            <div onClick={()=>display("2")} className="btn btn-dark pt-4" style={{width: "25%", height: "100%"}}>2</div>
            <div onClick={()=>display("3")} className="btn btn-dark pt-4" style={{width: "25%", height: "100%"}}>3</div>
            <div onClick={calculate} className="btn btn-primary pt-5" style={{width: "25%", height: "200%"}}>=</div>
        </div> 
        <div className="row fifth">
            <div onClick={()=>display("0")} className="btn btn-dark pt-4" style={{width: "50%"}}>0</div>
            <div onClick={()=>display(".")} className="btn btn-dark pt-4" style={{width: "25%"}}>.</div>
        </div>
    </div>
    <div className="text-center pt-3"><small><a href="http://bhindi.myweb.cs.uwindsor.ca/" className="text-center text-primary" target="_blank"><b>by Jenil</b></a></small></div>
  
    </>  
    )        
    
}

ReactDOM.render(<App/>, document.getElementById('app'));