import React, { Component } from 'react';


class SubNavigation extends Component {
    render() {
        return (
            <div className="SubNav">
            {
                (this.props.match.params.product)
            }
            </div>
        );
    }
}

export default SubNavigation;