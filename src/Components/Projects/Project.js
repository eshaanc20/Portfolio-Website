import React from 'react';
import Button from '@material-ui/core/Button';
import Devkit1 from '../../Assets/Devkit1.png';
import Devkit2 from '../../Assets/Devkit2.png';
import Devkit3 from '../../Assets/Devkit3.png';
import Devkit4 from '../../Assets/Devkit4.png';
import Devkit5 from '../../Assets/Devkit5.png';
import Announce1 from '../../Assets/Announce1.png';
import Announce2 from '../../Assets/Announce2.png';
import Announce3 from '../../Assets/Announce3.png';
import Announce4 from '../../Assets/Announce4.png';
import Announce5 from '../../Assets/Announce5.png';
import eyeSight1 from '../../Assets/eyeSight1.png';
import eyeSight2 from '../../Assets/eyeSight2.png';
import eyeSight3 from '../../Assets/eyeSight3.png';
import eyeSight4 from '../../Assets/eyeSight4.png';
import Inventor1 from '../../Assets/Inventor1.png';
import Inventor2 from '../../Assets/Inventor2.png';
import FitTogether1 from '../../Assets/FitTogether1.png';
import FitTogether2 from '../../Assets/FitTogether2.png';
import FitTogether3 from '../../Assets/FitTogether3.png';
import QuickAlert1 from '../../Assets/QuickAlert1.png';
import QuickAlert2 from '../../Assets/QuickAlert2.jpg';
import QuickAlert3 from '../../Assets/QuickAlert3.png';


class Project extends React.Component{
    constructor(props){
        super(props);
        if (props.project === 'Devkit') {
            this.list = [Devkit1, Devkit2, Devkit3, Devkit4, Devkit5];
        } else if (props.project === 'Announce') {
            this.list = [Announce1, Announce2, Announce3, Announce4, Announce5];
        } else if (props.project === 'eyeSight') {
            this.list = [eyeSight1, eyeSight2, eyeSight3, eyeSight4];
        } else if (props.project === 'Inventor') {
            this.list = [Inventor1, Inventor2];
        } else if (props.project === 'FitTogether') {
            this.list = [FitTogether1, FitTogether2, FitTogether3];
        } else if (props.project === 'QuickAlert') {
            this.list = [QuickAlert1, QuickAlert2, QuickAlert3];
        }
    }

    state = {
        current: 0,
        right: false,
        left: true
    }

    right = () => {
        let currentValue = this.state.current;
        this.setState({
            current: currentValue + 1,
            right: currentValue + 2 === this.list.length ? true: false,
            left: false,
        })
    }

    left = () => {
        let currentValue = this.state.current;
        this.setState({
            current: currentValue - 1,
            right: false,
            left: currentValue - 1 === 0 ? true: false,
        })
    }

    render() {
        return(
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Button disabled={this.state.left} onClick={this.left.bind(this)} style={{fontSize:'20px'}}
                >
                    &lt;
                </Button>
                <img 
                    src={this.list[this.state.current]} 
                    alt='' 
                    height={this.list[this.state.current] === QuickAlert2? this.props.height2: this.props.height} 
                    width={this.list[this.state.current] === QuickAlert2? this.props.width2: this.props.width} 
                    style={{marginLeft: '10px', marginRight: '10px'}}/>
                <Button disabled={this.state.right} onClick={this.right.bind(this)} style={{fontSize:'20px'}}>
                    &gt;
                </Button>
            </div>
        )
    }
}

export default Project;