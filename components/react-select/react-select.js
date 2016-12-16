// require('./react-select.scss');
import React,{Component} from 'react';
import './react-select.scss';


export default class ReactSelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            'selected': {
                key: -1,
                value: this.props.name
            },
            'listSt': {
                display: "none"
            }
        };    
    }
    clickSelect(e,value){
        this.setState({
            'selected': value,
            'listSt': {
                display: "none"
            }
        });
    }
    mouseWheel(e){
        // console.log(111);
    }
    mouseOver(e){
        this.setState({
            'listSt': {
                display: "block"
            }
        });
        // console.log(e);
    }
    render(){
        let self = this;
        let selist = self.props.selist;
        let {selected,listSt} = self.state;
        
        return(
            <div className="comp-select" 
                data-null={selected.key === -1 ? "true" : "false"} 
                data-selected={JSON.stringify(selected)}
                onMouseOver={e => {this.mouseOver(e)}}>
                <span className="select-selected-sp">{selected.value}</span>
                <i className={"iconfont if-arrow-down icon-arrow-down"}></i>
                <div className="select-list" style={listSt} onScroll={(e) => this.mouseWheel(e)}>
                    <div className="select-list-inner">
                        {
                            selist.map((item) => {
                                let classArr = ["select-list-item"]
                                if(item.key === selected.key){
                                    classArr.push("active");
                                }
                                return (<div className={classArr.join(" ")} onClick={e => this.clickSelect(e,item)} key={item.key}>{item.value}</div>)
                            })
                        }
                    </div>
                   
                </div>
            </div>
        );
    }
}

