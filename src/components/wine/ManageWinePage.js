import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wineActions from '../../actions/wineActions';
import WineForm from './WineForm';

class ManageWinePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            wine: Object.assign({}, props.wine),
            errors: {}
        };
    }

    render() {
        return (
            <WineForm
                allMakers={this.props.makers}
                wine={this.state.wine}
                errors={this.state.errors}
            />
        );
    }
}

ManageWinePage.propTypes = {
    wine: PropTypes.object.isRequired,
    makers: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    // Empty course for core wine structure
    let wine = {id: '', region: '', wineName: '', makerId: '', price: '', category: ''};

    // Translate the shape that came from API into something useful for populating drop-down
    const makersFormattedForDropdown = state.makers.map(maker => {
        return {
            value: maker.id,
            text: maker.wineName
        };
    });

    // Pass to component - list of objects below determine properties bound to component
    return {
        wine: wine,
        makers: makersFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(wineActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWinePage);
