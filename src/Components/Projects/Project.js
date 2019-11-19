import React from 'react';
import Button from '@material-ui/core/Button';

class Project extends React.Component{
    state = {
        current: 0,
        right: false,
        left: true
    }

    render() {
        return(
            <div>
                <Button disabled={this.state.left}>
                    &lt;
                </Button>
                <img src={this.props.list[this.state.current]} alt='' height={this.props.height} width={this.props.width}/>
                <Button disabled={this.state.right}>
                    &gt;
                </Button>
            </div>
        )
    }
}

export default Project;