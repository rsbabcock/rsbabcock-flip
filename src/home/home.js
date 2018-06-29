import React, { Component } from 'react'
import FlipPage from "react-flip-page"
import ProjectList from '../projects/ProjectList';
import Me from '../about/me';
import Cover from '../cover/cover';
import PlaceList from '../places/placeList';
import Favs from '../favs/favs';
import Book from '../book/book';
import './home.css'
// Your name
// List of technologies you've learned so far

class Home extends Component {
    
    state = {
        width:"90vw"
    }

    
    render() {
        // debugger
        return (
            <div className="flipContainer">
                <FlipPage orientation="horizontal"
                flipOnTouch
                showTouchHint
                uncutPages
                perspective="50em" 
                animationDuration="600" 
                width={this.state.width}
                >
                    <article>
                        <Book/>
                    </article >
                    <article  >
                        <Cover me={this.props.me} key={this.key} />
                    </article>
                    <article>
                        <Me me={this.props.me} key={this.key}/>    
                    </article>
                    <article>
                        <h1><ProjectList projects={this.props.projects} key={this.key}/></h1>
                    </article>
                    <article>
                        <h1><PlaceList places={this.props.places} key={this.key}/></h1>
                    </article>
                    <article>
                        <h1><Favs favs={this.props.favs} key={this.key}/></h1>
                    </article>
                </FlipPage>
            </div>
        );
    }
}

export default Home