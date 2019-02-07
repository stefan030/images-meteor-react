// { Component } find React library and pull off a property component from that library
import React, { Component } from 'react';
import axios from 'axios';
import ImageList from './../../client/components/image_list';


export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: []
        };

    }

    componentWillMount() {
        console.log('App is about to render');
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
            .then(response => {
                this.setState({
                    images: response.data.data
                });
            })
    }

    render() {
        console.log(this.state.images);
        return (
            <div>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}