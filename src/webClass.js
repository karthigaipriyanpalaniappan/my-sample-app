import React, {Component} from 'react'


class WebClass extends Component{

    constructor(){   
        super();
        this.state = {
            likeCount : 0
        }
        console.log("webClass Constructor");
        
    }

   countLike = () => {
        let totalCount = this.state.likeCount + 1
        this.setState({likeCount: totalCount});
   }
    
    render(){
        
        console.log("webClass Render");
        
        return(
            <div>
            <p> Main Content available on {this.props.AvailableDate}</p>
            {this.state.likeCount > 25 ? <p> Reached 25 </p> : <p>Click below button to like the page</p>}

            <button onClick = {this.countLike} >Like</button>
            <p> Total Like Count {this.state.likeCount}</p>
            </div>
        )
    }

    componentDidMount(){
        console.log("webClass Component Did Mount");
    }

    componentDidUpdate(){
        console.log("webClass Component Updated")
    }

}

export default WebClass;