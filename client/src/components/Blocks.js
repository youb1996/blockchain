import React, { Component } from 'react';
import Block from './Block'


class Blocks extends Component {
    state = {blocks: []};
    componentDidMount() {
        fetch('http://localhost:3000/api/blocks')
            .then(res => res.json())
            .then(json => this.setState({ blocks: json }));
    }
    
    render() {
        return (
            <div>
                <h3>Blocks</h3>
                {this.state.blocks.map(block=>{
                    return(
                        
                        <Block key={block.hash} block={block}></Block>
                        
                    );
                })}
            </div>
        )
    }
}

export default Blocks;