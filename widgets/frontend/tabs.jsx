import React from "react";

export default class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selectedTabIdx: 0};
        this.selectTab = this.selectTab.bind(this);
    }        


    selectTab(idx){
       console.log(idx);
        this.setState({selectedTabIdx: idx});
    }


    render(){
        const tab = this.props.tabs[this.state.selectedTabIdx];
        return (
            <div className="tabs-div">
                <h1 className="tabs-title">~Tabs Widget~</h1>
                <Header tabs={this.props.tabs} selectedTab={this.state.selectedTabIdx} tabSelected={this.selectTab}>
                </Header>
                <div className='tab-content'>
                    <article>{tab.content}</article>
                </div>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){

        const elements = this.props.tabs.map((tab, idx) => {
            const tabClass = idx === this.props.selectedTab ? "selected" : "";
            return (
                <li key={idx} className={tabClass} onClick={()=> {this.props.tabSelected(idx)}}>
                    {tab.title}
                </li>
            );
        });

        return (
            <ul className="header-list">
                {elements}
            </ul>
        );
    } 
}